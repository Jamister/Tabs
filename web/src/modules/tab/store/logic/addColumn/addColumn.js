/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';
import { extract } from 'modules/tab/utils/extractIds';
import createUniqueId from 'modules/shared/utils/createUniqueId';

const addColumn = produce((draft, action) => {
    const columnsAllIds = draft?.columns?.allIds || [];
    const selected_note = draft?.selected_note || {};
    const { p, b, c, l } = selected_note;

    function getAllColumnsInBlock() {
        const columnsInCurrentBlock = columnsAllIds
            .filter(id => id.indexOf(`${p}-${b}-`) !== -1);
        return columnsInCurrentBlock;
    }

    function createColumnId() {
        const columnsInCurrentBlock = getAllColumnsInBlock();
        const hash = `column ${columnsInCurrentBlock.length + 1}`;
        const { smaller_id: newColumnId } = createUniqueId(hash);
        const newColumnFullId = `${p}-${b}-${newColumnId}`;
        return newColumnFullId;
    }

    function finish() {
        return draft;
    }

    function setLastChange() {
        draft.lastChange = getDateNow();
        return finish();
    }

    function moveNoteToNewColumn(newColumnFullId) {
        const columnId = extract.columnId({
            full_id: newColumnFullId,
        });
        const newSelectedNote = { p, b, c: columnId, l };
        draft.selected_note = newSelectedNote;
        return setLastChange();
    }

    function addNewColumn(selectedColumnLocation) {
        const newColumnFullId = createColumnId();
        const locationToAdd = selectedColumnLocation + 1;
        draft.columns.allIds.splice(locationToAdd, 0, newColumnFullId);
        draft.columns.byId[newColumnFullId] = {};
        return moveNoteToNewColumn(newColumnFullId);
    }

    function addNewColumnAtTheEnd() {
        const newColumnFullId = createColumnId();
        draft.columns.allIds.push(newColumnFullId);
        draft.columns.byId[newColumnFullId] = {};
        return moveNoteToNewColumn(newColumnFullId);
    }

    function getSelectedColumnLocationOnArray() {
        const selectedColumnFullId = `${p}-${b}-${c}`;
        const selectedColumnLocation = columnsAllIds
            .findIndex(id => id === selectedColumnFullId);
        return addNewColumn(selectedColumnLocation);
    }

    function checkIfIsLastColumn() {
        const columnsInCurrentBlock = getAllColumnsInBlock();
        const [lastColumnFullId] = columnsInCurrentBlock.slice(-1);
        const lastColumnId = extract.columnId({
            full_id: lastColumnFullId,
        });
        const isLastColumn = c === lastColumnId;
        return isLastColumn
            ? addNewColumnAtTheEnd()
            : finish();
    }

    function checkEmptyNote() {
        const noteId = `${p}-${b}-${c}-${l}`;
        const noteValue = (draft.notes || {})[noteId]?.value || '';
        const hasEmptyValue = noteValue === '';
        return hasEmptyValue
            ? finish()
            : checkIfIsLastColumn();
    }

    function autoAddWhenEditingTab() {
        const autoAdd = action?.auto || false;
        return autoAdd
            ? checkEmptyNote()
            : getSelectedColumnLocationOnArray();
    }

    return autoAddWhenEditingTab();
});

export default addColumn;
