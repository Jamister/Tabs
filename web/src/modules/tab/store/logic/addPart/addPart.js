/* eslint-disable no-param-reassign */
import produce from 'immer';
import createUniqueId from 'modules/shared/utils/createUniqueId';
import createColumns from 'modules/tab/utils/createColumns';

const addPart = produce((draft) => {
    const parts = draft.parts || {};
    const parts_all_ids = parts.all_ids || [];
    const parts_by_id = parts.by_id || {};

    function saveStore() {
        return draft;
    }

    function addColumnsToById(new_columns) {
        const { by_id } = new_columns;
        const columns_by_id = (draft.columns || {}).by_id || {};
        const new_columns_by_id = {
            ...columns_by_id,
            ...by_id,
        };
        draft.columns.by_id = new_columns_by_id;
        return saveStore();
    }

    function addColumnsToAllIds(new_columns) {
        const { all_ids } = new_columns;
        const columns_all_ids = (draft.columns || {}).all_ids || [];
        const new_columns_all_ids = [
            ...columns_all_ids,
            ...all_ids,
        ];
        draft.columns.all_ids = new_columns_all_ids;
        return addColumnsToById(new_columns);
    }

    function createBlockColumns(full_block_id) {
        const new_columns = createColumns(full_block_id);
        return addColumnsToAllIds(new_columns);
    }

    function addBlockToById(full_block_id) {
        const blocks_by_id = (draft.blocks || {}).by_id || {};
        const new_blocks_by_id = {
            ...blocks_by_id,
            [full_block_id]: {},
        };
        draft.blocks.by_id = new_blocks_by_id;
        return createBlockColumns(full_block_id);
    }

    function addBlockToAllIds(full_block_id) {
        const blocks_all_ids = (draft.blocks || {}).all_ids || [];
        const new_blocks_all_ids = [...blocks_all_ids, full_block_id];
        draft.blocks.all_ids = new_blocks_all_ids;
        return addBlockToById(full_block_id);
    }

    function createBlockId(next_part_id) {
        const hash = 'block 1';
        const { smaller_id: next_block_id } = createUniqueId(hash);
        const full_block_id = `${next_part_id}-${next_block_id}`;
        return addBlockToAllIds(full_block_id);
    }

    function addPartToById(next_part_id) {
        const new_parts_by_id = {
            ...parts_by_id,
            [next_part_id]: { type: 'tablature' },
        };
        draft.parts.by_id = new_parts_by_id;
        return createBlockId(next_part_id);
    }

    function addPartToAllIds(next_part_id) {
        const new_parts_all_ids = [...parts_all_ids, next_part_id];
        draft.parts.all_ids = new_parts_all_ids;
        return addPartToById(next_part_id);
    }

    function createNextPartId() {
        const hash = `part ${parts_all_ids.length + 1}`;
        const { smaller_id: next_part_id } = createUniqueId(hash);
        return addPartToAllIds(next_part_id);
    }

    return createNextPartId();
});

export default addPart;
