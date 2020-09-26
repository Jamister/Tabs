/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';
import createUniqueId from 'modules/shared/utils/createUniqueId';
import createColumns from 'modules/tab/utils/createColumns';

const addBlock = produce((draft, action) => {
    const blocks = draft.blocks || {};
    const blocks_all_ids = blocks.all_ids || [];
    const { part_id } = action;

    function finish() {
        return draft;
    }

    function setLastChange() {
        draft.lastChange = getDateNow();
        return finish();
    }

    function addColumnsToById(new_columns) {
        const { by_id } = new_columns;
        const columns_by_id = (draft.columns || {}).by_id || {};
        const new_columns_by_id = {
            ...columns_by_id,
            ...by_id,
        };
        draft.columns.by_id = new_columns_by_id;
        return setLastChange();
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
        const new_blocks_all_ids = [...blocks_all_ids, full_block_id];
        draft.blocks.all_ids = new_blocks_all_ids;
        return addBlockToById(full_block_id);
    }

    function createBlockId() {
        const hash = `block ${blocks_all_ids.length + 1}`;
        const { smaller_id: next_block_id } = createUniqueId(hash);
        const full_block_id = `${part_id}-${next_block_id}`;
        return addBlockToAllIds(full_block_id);
    }

    function checkBlankPartId() {
        // TODO
        return createBlockId();
    }

    return checkBlankPartId();

    // const blocks = state.blocks || {};
    // const all_ids = blocks.all_ids || [];
    // const by_id = blocks.by_id || {};
    // const { part_id } = action;

    // const { next_block_id, block_id } = getNextBlock(by_id, part_id);
    // const _all_ids = [...all_ids, next_block_id]
    //     .filter((el, i, a) => i === a.indexOf(el));
    // const _blocks = {
    //     all_ids: _all_ids,
    //     by_id: {
    //         ...by_id,
    //         [next_block_id]: {
    //             part_id,
    //             id: next_block_id,
    //         },
    //     },
    // };

    // const columns = createColumns({
    //     state,
    //     block_id,
    //     next_block_id,
    //     part_id,
    // });

    // return {
    //     ...state,
    //     blocks: _blocks,
    //     columns,
    // };
});

export default addBlock;
