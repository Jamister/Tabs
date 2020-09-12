/* eslint-disable no-param-reassign */
import produce from 'immer';
import { extract } from 'modules/tab/utils/extractIds';

const addColumn = produce((draft) => {
    const selected_note = draft?.selected_note || {};
    const { p, b, c, l } = selected_note;

    function finish() {
        return draft;
    }

    function addNewColumn() {
        const next_column_id = `${p}-${b}-${c + 1}`;
        draft.columns.all_ids.push(next_column_id);
        draft.columns.by_id[next_column_id] = {
            part_id: p,
            block_id: b,
            id: next_column_id,
        };
        return finish();
    }

    function checkIfIsLastColumn() {
        const allColumnsInCurrentBlock = (draft?.columns?.all_ids || [])
            .filter(id => id.indexOf(`${p}-${b}-`) !== -1);
        const [lastColumnFullId] = allColumnsInCurrentBlock.slice(-1);
        const lastColumnId = extract.columnId({
            full_id: lastColumnFullId,
        });
        const isLastColumn = c === lastColumnId;
        return isLastColumn
            ? addNewColumn()
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
