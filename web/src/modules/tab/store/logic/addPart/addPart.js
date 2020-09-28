/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';
import createUniqueId from 'modules/shared/utils/createUniqueId';
import createColumns from 'modules/tab/utils/createColumns';

const addPart = produce((draft) => {
    const parts = draft.parts || {};
    const partsAllIds = parts.allIds || [];
    const partsById = parts.byId || {};

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
        const blocksAllIds = (draft.blocks || {}).allIds || [];
        const newBlocksAllIds = [...blocksAllIds, full_block_id];
        draft.blocks.allIds = newBlocksAllIds;
        return addBlockToById(full_block_id);
    }

    function createBlockId(next_part_id) {
        const hash = 'block 1';
        const { smaller_id: next_block_id } = createUniqueId(hash);
        const full_block_id = `${next_part_id}-${next_block_id}`;
        return addBlockToAllIds(full_block_id);
    }

    function addPartToById(next_part_id) {
        const newPartsById = {
            ...partsById,
            [next_part_id]: { type: 'tablature' },
        };
        draft.parts.byId = newPartsById;
        return createBlockId(next_part_id);
    }

    function addPartToAllIds(next_part_id) {
        const newPartsAllIds = [...partsAllIds, next_part_id];
        draft.parts.allIds = newPartsAllIds;
        return addPartToById(next_part_id);
    }

    function createNextPartId() {
        const hash = `part ${partsAllIds.length + 1}`;
        const { smaller_id: next_part_id } = createUniqueId(hash);
        return addPartToAllIds(next_part_id);
    }

    return createNextPartId();
});

export default addPart;
