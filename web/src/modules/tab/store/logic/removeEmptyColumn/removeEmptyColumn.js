/* eslint-disable no-param-reassign */
import produce from 'immer';

const removeEmptyColumn = produce((draft, action) => {
    const columns = draft.columns || {};
    const by_id = columns.by_id || {};
    const selected_note = draft.selected_note || {};
    const { p, b, c, l } = selected_note;

    function finish() {
        return draft;
    }

    function moveNote() {
        const next_selected_note = { p, b, c: c - 1, l };
        draft.selected_note = next_selected_note;
        return finish();
    }

    function removeColumn(column_full_id) {
        const columns_by_id = { ...by_id || {} };
        const columns_all_ids = (columns.all_ids || [])
            .filter(id => {
                const to_delete = id === column_full_id;
                if (to_delete) {
                    delete columns_by_id[id];
                }
                return !to_delete;
            });
        draft.columns = {
            all_ids: columns_all_ids,
            by_id: columns_by_id,
        };
        return moveNote();
    }

    function checkIfBlockHasLessThan2Columns(column_full_id) {
        const minimum_columns = 2;
        const column_id = Number(c);
        const block_has_min_columns = column_id <= minimum_columns;
        return !block_has_min_columns
            ? removeColumn(column_full_id)
            : finish();
    }

    function checkIfIsLastColumn(column_full_id) {
        const next_column_id = `${p}-${b}-${c + 1}`;
        const last_column = by_id[next_column_id] === undefined;
        return last_column
            ? checkIfBlockHasLessThan2Columns(column_full_id)
            : finish();
    }

    function checkIfAllNotesAreEmpty() {
        const lines = draft.lines || [];
        const notes = { ...draft.notes };
        const column_full_id = `${p}-${b}-${c}`;
        let column_has_notes = false;
        lines.forEach(line => {
            const note_full_id = `${p}-${b}-${c}-${line}`;
            const note_value = (notes[note_full_id] || {}).value || '';
            const note_exists = note_value !== '';
            if (note_exists) {
                column_has_notes = true;
            }
        });
        return !column_has_notes
            ? checkIfIsLastColumn(column_full_id)
            : finish();
    }

    function checkIfDelWasPressed() {
        const key = action.key || '';
        const del_was_pressed = key === 'Delete';
        return del_was_pressed
            ? checkIfAllNotesAreEmpty()
            : finish();
    }

    return checkIfDelWasPressed();
});

export default removeEmptyColumn;
