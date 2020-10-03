/* eslint-disable no-param-reassign */
import produce from 'immer';
import { extract } from 'modules/tab/utils/extractIds';
import createUniqueId from 'modules/shared/utils/createUniqueId';

const addColumn = produce((draft) => {
    const selected_note = draft?.selected_note || {};
    const { p, b, c, l } = selected_note;

    function finish() {
        return draft;
    }

    function addNewColumn(fullNewColumnId) {
        draft.columns.allIds.push(fullNewColumnId);
        draft.columns.byId[fullNewColumnId] = {};
        return finish();
    }

    function createColumnId(allColumnsInCurrentBlock) {
        const hash = `column ${allColumnsInCurrentBlock.length + 1}`;
        const { smaller_id: newColumnId } = createUniqueId(hash);
        const fullNewColumnId = `${p}-${b}-${newColumnId}`;
        return addNewColumn(fullNewColumnId);
    }

    function checkIfIsLastColumn() {
        const allColumnsInCurrentBlock = (draft?.columns?.allIds || [])
            .filter(id => id.indexOf(`${p}-${b}-`) !== -1);
        const [lastColumnFullId] = allColumnsInCurrentBlock.slice(-1);
        const lastColumnId = extract.columnId({
            full_id: lastColumnFullId,
        });
        const isLastColumn = c === lastColumnId;
        return isLastColumn
            ? createColumnId(allColumnsInCurrentBlock)
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

    return checkEmptyNote();
});

export default addColumn;
