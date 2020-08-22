/* eslint-disable no-param-reassign */
import produce from 'immer';

const removeBlock = produce((draft, action) => {
    const blocks = draft.blocks || {};
    const blocks_all_ids = blocks.all_ids || [];
    const blocks_by_id = blocks.by_id || {};

    function finish() {
        return draft;
    }

    function removeNotesInLastBlock(last_block_id) {
        const notes = { ...draft.notes };
        const notes_ids = Object.keys(notes) || [];
        notes_ids.forEach(note_id => {
            const to_delete = note_id.indexOf(`${last_block_id}-`) === 0;
            if (to_delete) delete notes[note_id];
            return !to_delete;
        });
        draft.notes = notes;
        return finish();
    }

    function removeColumnsInLastBlock(last_block_full_id) {
        const columns = draft.columns || {};
        const new_columns_by_id = { ...columns.by_id || {} };
        const new_columns_all_ids = (columns.all_ids || [])
            .filter(id => {
                const to_delete = id.indexOf(`${last_block_full_id}-`) === 0;
                if (to_delete) delete new_columns_by_id[id];
                return !to_delete;
            });
        draft.columns.all_ids = new_columns_all_ids;
        draft.columns.by_id = new_columns_by_id;
        return removeNotesInLastBlock(last_block_full_id);
    }

    function removeBlockFromById(last_block_full_id) {
        const new_blocks_by_id = { ...blocks_by_id };
        delete new_blocks_by_id[last_block_full_id];
        draft.blocks.by_id = new_blocks_by_id;
        return removeColumnsInLastBlock(last_block_full_id);
    }

    function removeBlockFromAllIds(last_block_full_id) {
        blocks_all_ids.pop();
        const new_blocks_all_ids = blocks_all_ids;
        draft.blocks.all_ids = new_blocks_all_ids;
        return removeBlockFromById(last_block_full_id);
    }

    function getLastBlockId(part_id, blocks_in_this_part) {
        const [last_block_full_id] = blocks_in_this_part.slice(-1);
        return removeBlockFromAllIds(last_block_full_id);
    }

    function findBlocksOfThisPart(part_id) {
        const blocks_in_this_part = blocks_all_ids
            .filter(b => b.indexOf(`${part_id}-`) !== -1);
        return getLastBlockId(part_id, blocks_in_this_part);
    }

    function checkEmptyParams() {
        const part_id = action.part_id || '';
        const empty_id = part_id === '';
        return empty_id
            ? finish()
            : findBlocksOfThisPart(part_id);
    }

    return checkEmptyParams();
});

export default removeBlock;
