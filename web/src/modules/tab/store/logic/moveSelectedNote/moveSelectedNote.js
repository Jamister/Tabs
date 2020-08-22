/* eslint-disable no-param-reassign */
import produce from 'immer';
import { extract } from 'modules/tab/utils/extractIds';

const moveSelectedNote = produce((draft, action) => {
    const selected_note = draft?.selected_note || {};
    const columns = draft?.columns || {};
    const blocks = draft?.blocks || {};
    const lines = draft?.lines || [];
    const { p, b, c, l } = selected_note;

    function doNothing() {
        return draft;
    }

    function saveState(new_selected_note) {
        draft.selected_note = new_selected_note;
        return draft;
    }

    function ArrowDown() {
        const lower_line = lines.reduce((res, cur) => (cur > res ? cur : res));
        const next_line = l === lower_line ? lower_line : l + 1;
        const new_selected_note = { p, b, c, l: next_line };
        return saveState(new_selected_note);
    }

    function ArrowUp() {
        const next_line = l === 1 ? 1 : l - 1;
        const new_selected_note = { p, b, c, l: next_line };
        return saveState(new_selected_note);
    }

    function findBlockInPart(orderHandler) {
        const all_blocks_in_current_part = (blocks.all_ids || [])
            .filter(id => id.indexOf(`${p}-`) !== -1);
        const current_block_full_id = `${p}-${b}`;
        const location_of_current_block = all_blocks_in_current_part
            .findIndex(id => id === current_block_full_id);
        const previous_block_full_id = all_blocks_in_current_part[orderHandler(location_of_current_block)];
        return previous_block_full_id;
    }

    function findColumnInBlock(orderHandler) {
        const all_columns_in_current_block = (columns.all_ids || [])
            .filter(id => id.indexOf(`${p}-${b}-`) !== -1);
        const current_column_full_id = `${p}-${b}-${c}`;
        const location_of_current_column = all_columns_in_current_block
            .findIndex(id => id === current_column_full_id);
        const previous_column_full_id = all_columns_in_current_block[orderHandler(location_of_current_column)];
        return previous_column_full_id;
    }

    function ArrowLeft() {
        const prev = n => n - 1;
        const previous_column_full_id = findColumnInBlock(prev);
        const previous_block_full_id = findBlockInPart(prev);

        const is_column_1_of_part = (
            previous_column_full_id === undefined
            && previous_block_full_id === undefined
        );
        if (is_column_1_of_part) {
            return doNothing();
        }

        // REFACTOR
        const is_column_1_of_current_block = previous_column_full_id === undefined;
        if (is_column_1_of_current_block) {
            const all_columns_in_previous_block = (columns.all_ids || [])
                .filter(id => id.indexOf(`${previous_block_full_id}-`) !== -1);
            const [last_column_on_previous_block] = all_columns_in_previous_block.slice(-1);
            const previous_block_id = extract.blockId({
                full_id: previous_block_full_id,
            });
            const last_column_id = extract.columnId({
                full_id: last_column_on_previous_block,
            });
            const new_selected_note = { p, b: previous_block_id, c: last_column_id, l };
            return saveState(new_selected_note);
        }

        const previous_column_id = extract.columnId({
            full_id: previous_column_full_id,
        });
        const new_selected_note = { p, b, c: previous_column_id, l };
        return saveState(new_selected_note);
    }

    function rightArrow() {
        const next = n => n + 1;
        const next_column_full_id = findColumnInBlock(next);
        const next_block_full_id = findBlockInPart(next);

        const is_last_column_of_part = (
            next_column_full_id === undefined
            && next_block_full_id === undefined
        );
        if (is_last_column_of_part) {
            return doNothing();
        }

        // REFACTOR
        const is_last_column_of_current_block = next_column_full_id === undefined;
        if (is_last_column_of_current_block) {
            const all_columns_in_next_block = (columns.all_ids || [])
                .filter(id => id.indexOf(`${next_block_full_id}-`) !== -1);
            const first_column_on_next_block = all_columns_in_next_block[0];
            const next_block_id = extract.blockId({
                full_id: next_block_full_id,
            });
            const first_column_id = extract.columnId({
                full_id: first_column_on_next_block,
            });
            const new_selected_note = { p, b: next_block_id, c: first_column_id, l };
            return saveState(new_selected_note);
        }

        const next_column_id = extract.columnId({
            full_id: next_column_full_id,
        });
        const new_selected_note = { p, b, c: next_column_id, l };
        return saveState(new_selected_note);
    }

    function defineKeyFunction() {
        const key = (action || {}).key || '';
        switch (key) {
        case 'Tab':
        case 'ArrowRight': return rightArrow();
        case 'ArrowLeft': return ArrowLeft();
        case 'ArrowUp': return ArrowUp();
        case 'ArrowDown': return ArrowDown();
        default: return doNothing();
        }
    }

    return defineKeyFunction();
});

export default moveSelectedNote;
