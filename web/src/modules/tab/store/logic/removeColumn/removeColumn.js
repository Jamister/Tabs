/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';
import { extract } from 'modules/tab/utils/extractIds';

const removeColumn = produce((draft) => {
    const columnsAllIds = draft?.columns?.allIds || [];
    const selected_note = draft.selected_note || {};
    const { p, b, c, l } = selected_note;

    function finish() {
        return draft;
    }

    function setLastChange() {
        draft.lastChange = getDateNow();
        return finish();
    }

    function removeNotesInColumn(selectedColumnFullId) {
        const notes = { ...draft.notes };
        const notesIds = Object.keys(notes) || [];
        notesIds.forEach(noteId => {
            const toDelete = noteId.indexOf(`${selectedColumnFullId}-`) === 0;
            if (toDelete) delete notes[noteId];
            return !toDelete;
        });
        draft.notes = notes;
        return setLastChange();
    }

    function removeColumnFromById(selectedColumnFullId) {
        delete draft.columns.byId[selectedColumnFullId];
        return removeNotesInColumn(selectedColumnFullId);
    }

    function removeColumnFromAllIds(selectedColumnFullId) {
        draft.columns.allIds = columnsAllIds
            .filter(columnId => columnId !== selectedColumnFullId);
        return removeColumnFromById(selectedColumnFullId);
    }

    function moveNoteTo(columnFullId, selectedColumnFullId) {
        const nextColumnId = extract.columnId({
            full_id: columnFullId,
        });
        const nextSelectedNote = { p, b, c: nextColumnId, l };
        draft.selected_note = nextSelectedNote;
        return removeColumnFromAllIds(selectedColumnFullId);
    }

    function startMovingNote(columnsInCurrentBlock, selectedColumnFullId) {
        const selectedColumnLocation = columnsInCurrentBlock
            .findIndex(id => id === selectedColumnFullId);
        const nextColumnFullId = columnsInCurrentBlock[selectedColumnLocation + 1];
        const prevColumnFullId = columnsInCurrentBlock[selectedColumnLocation - 1];
        const hasNextColumn = nextColumnFullId !== undefined;
        return hasNextColumn
            ? moveNoteTo(nextColumnFullId, selectedColumnFullId)
            : moveNoteTo(prevColumnFullId, selectedColumnFullId);
    }

    function getSelectedColumnFullId(columnsInCurrentBlock) {
        const selectedColumnFullId = `${p}-${b}-${c}`;
        return startMovingNote(columnsInCurrentBlock, selectedColumnFullId);
    }

    function checkIfBlockHasOnly1Column() {
        const columnsInCurrentBlock = columnsAllIds
            .filter(id => id.indexOf(`${p}-${b}-`) !== -1);
        const hasOnly1ColumnLeft = columnsInCurrentBlock.length === 1;
        return hasOnly1ColumnLeft
            ? finish()
            : getSelectedColumnFullId(columnsInCurrentBlock);
    }

    return checkIfBlockHasOnly1Column();
});

export default removeColumn;
