const removeEmptyColumn = (state = {}, action = {}) => {
    const columns = state.columns || {};
    const by_id = columns.by_id || {};
    const selected_note = state.selected_note || {};
    const { p, b, c, l } = selected_note;
    const updated_state = { ...state };

    function returnDefaultState() {
        return { ...state };
    }

    function returnUpdatedState() {
        return { ...updated_state };
    }

    function moveNote() {
        const next_selected_note = { p, b, c: c - 1, l };
        updated_state.selected_note = next_selected_note;
        return returnUpdatedState();
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
        updated_state.columns = {
            all_ids: columns_all_ids,
            by_id: columns_by_id,
        };
        return moveNote();
    }

    function checkIfBlockHasLessThan2Columns(column_full_id) {
        const minimum_columns = 2;
        const column_id = Number(c);
        const block_has_min_columns = column_id <= minimum_columns;
        return block_has_min_columns
            ? returnDefaultState()
            : removeColumn(column_full_id);
    }

    function checkIfIsLastColumn(column_full_id) {
        const next_column_id = `${p}-${b}-${c + 1}`;
        const last_column = by_id[next_column_id] === undefined;
        return last_column
            ? checkIfBlockHasLessThan2Columns(column_full_id)
            : returnDefaultState();
    }

    function checkIfAllNotesAreEmpty() {
        const lines = state.lines || [];
        const notes = { ...state.notes };
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
        return column_has_notes
            ? returnDefaultState()
            : checkIfIsLastColumn(column_full_id);
    }

    function checkIfDelWasPressed() {
        const key_code = action.key_code || '';
        const del_was_pressed = key_code === 46;
        return del_was_pressed
            ? checkIfAllNotesAreEmpty()
            : returnDefaultState();
    }

    return checkIfDelWasPressed();
};

export default removeEmptyColumn;
