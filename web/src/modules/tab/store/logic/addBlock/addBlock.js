/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';
import createUniqueId from 'modules/shared/utils/createUniqueId';
import createColumns from 'modules/tab/utils/createColumns';

const addBlock = produce((draft, action) => {
    const blocks = draft.blocks || {};
    const blocksAllIds = blocks.allIds || [];
    const { part_id } = action;

    function finish() {
        return draft;
    }

    function setLastChange() {
        draft.lastChange = getDateNow();
        return finish();
    }

    function addColumnsToById(new_columns) {
        const { byId } = new_columns;
        const columnsById = (draft.columns || {}).byId || {};
        const newColumnsById = {
            ...columnsById,
            ...byId,
        };
        draft.columns.byId = newColumnsById;
        return setLastChange();
    }

    function addColumnsToAllIds(new_columns) {
        const { allIds } = new_columns;
        const columnsAllIds = (draft.columns || {}).allIds || [];
        const newColumnsAllIds = [
            ...columnsAllIds,
            ...allIds,
        ];
        draft.columns.allIds = newColumnsAllIds;
        return addColumnsToById(new_columns);
    }

    function createBlockColumns(full_block_id) {
        const new_columns = createColumns(full_block_id);
        return addColumnsToAllIds(new_columns);
    }

    function addBlockToById(full_block_id) {
        const blocksById = (draft.blocks || {}).byId || {};
        const newBlocksById = {
            ...blocksById,
            [full_block_id]: {},
        };
        draft.blocks.byId = newBlocksById;
        return createBlockColumns(full_block_id);
    }

    function addBlockToAllIds(full_block_id) {
        const newBlocksAllIds = [...blocksAllIds, full_block_id];
        draft.blocks.allIds = newBlocksAllIds;
        return addBlockToById(full_block_id);
    }

    function createBlockId() {
        const hash = `block ${blocksAllIds.length + 1}`;
        const { smaller_id: next_block_id } = createUniqueId(hash);
        const full_block_id = `${part_id}-${next_block_id}`;
        return addBlockToAllIds(full_block_id);
    }

    function checkBlankPartId() {
        // TODO
        return createBlockId();
    }

    return checkBlankPartId();
});

export default addBlock;
