import { cloneObject } from 'modules/shared/utils/objects';
import { findLastColumn } from 'modules/tab/utils/findLastColumn';

const moveSelectedNote = (state = {}, action = {}) => {
    const new_state = cloneObject(state);
    const key_code = (action || {}).key_code || 0;
    const selected_note = (state || {}).selected_note || {};
    const columns = (state || {}).columns || {};
    const blocks = (state || {}).blocks || {};
    const lines = (state || {}).lines || [];
    const { p, b, c, l } = selected_note;

    function doNothing() {
        return state;
    }

    function saveState(new_selected_note) {
        new_state.selected_note = new_selected_note;
        return state;
    }

    function downArrow() {
        const lower_line = lines.reduce((res, cur) => (cur > res ? cur : res));
        const next_line = l === lower_line ? lower_line : l + 1;
        const new_selected_note = { p, b, c, l: next_line };
        return saveState(new_selected_note);
    }

    function topArrow() {
        const next_line = l === 1 ? 1 : l - 1;
        const new_selected_note = { p, b, c, l: next_line };
        return saveState(new_selected_note);
    }

    function leftArrow() {
        let next_column = c - 1;
        let next_block = b;
        if (next_column === 0 && b === 1) {
            next_column = 1;
        }
        if (next_column === 0 && b > 1) {
            next_column = findLastColumn(columns, p, b - 1);
            next_block = b - 1;
        }
        const new_selected_note = { p, b: next_block, c: next_column, l };
        return saveState(new_selected_note);
    }

    function rightArrow() {
        const column_full_id = `${p}-${b}-${c + 1}`;
        const next_column_exists = (columns.by_id || {})[column_full_id] !== undefined;
        const next_block_exists = (blocks.by_id || {})[`${p}-${b + 1}`] !== undefined;
        let block_id = next_column_exists
            ? b
            : b + 1;
        let column_id = next_column_exists
            ? c + 1
            : 1;

        if (!next_column_exists && !next_block_exists) {
            block_id = b;
            column_id = c;
        }

        const new_selected_note = { p, b: block_id, c: column_id, l };
        return saveState(new_selected_note);
    }

    function defineKeyFunction() {
        switch (key_code) {
        case 9:
        case 39:
            return rightArrow();
        case 37:
            return leftArrow();
        case 38:
            return topArrow();
        case 40:
            return downArrow();
        default:
            return doNothing();
        }
    }

    return defineKeyFunction();
};

export default moveSelectedNote;
