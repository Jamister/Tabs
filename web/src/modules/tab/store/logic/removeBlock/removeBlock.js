/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';

const removeBlock = produce((draft, action) => {
    const partId = action?.part_id || '';
    const blocks = draft.blocks || {};
    const blocks_all_ids = blocks.all_ids || [];
    const blocks_by_id = blocks.by_id || {};
    const blocksInThisPart = blocks_all_ids
        .filter(b => b.indexOf(`${partId}-`) !== -1);

    function finish() {
        return draft;
    }

    function setLastChange() {
        draft.lastChange = getDateNow();
        return finish();
    }

    function removePartFromById() {
        const partsById = { ...draft?.parts?.by_id };
        delete partsById[partId];
        draft.parts.by_id = partsById;
        return setLastChange();
    }

    function removePartFromAllIds() {
        const partsAllIds = draft?.parts?.all_ids || [];
        draft.parts.all_ids = partsAllIds.filter(p => p !== partId);
        return removePartFromById();
    }

    function removePartIfIsLastBlock() {
        const isLastBlockInThisPart = blocksInThisPart.length === 1;
        return isLastBlockInThisPart
            ? removePartFromAllIds()
            : setLastChange();
    }

    function removeNotesInLastBlock(lastBlockFullId) {
        const notes = { ...draft.notes };
        const notes_ids = Object.keys(notes) || [];
        notes_ids.forEach(note_id => {
            const to_delete = note_id.indexOf(`${lastBlockFullId}-`) === 0;
            if (to_delete) delete notes[note_id];
            return !to_delete;
        });
        draft.notes = notes;
        return removePartIfIsLastBlock();
    }

    function removeColumnsInLastBlock(lastBlockFullId) {
        const columns = draft.columns || {};
        const new_columns_by_id = { ...columns.by_id || {} };
        const new_columns_all_ids = (columns.all_ids || [])
            .filter(id => {
                const to_delete = id.indexOf(`${lastBlockFullId}-`) === 0;
                if (to_delete) delete new_columns_by_id[id];
                return !to_delete;
            });
        draft.columns.all_ids = new_columns_all_ids;
        draft.columns.by_id = new_columns_by_id;
        return removeNotesInLastBlock(lastBlockFullId);
    }

    function removeBlockFromById(lastBlockFullId) {
        const new_blocks_by_id = { ...blocks_by_id };
        delete new_blocks_by_id[lastBlockFullId];
        draft.blocks.by_id = new_blocks_by_id;
        return removeColumnsInLastBlock(lastBlockFullId);
    }

    function removeBlockFromAllIds(lastBlockFullId) {
        const blocksAllIdsUpdated = blocks_all_ids
            .filter(blockId => blockId !== lastBlockFullId);
        draft.blocks.all_ids = blocksAllIdsUpdated;
        return removeBlockFromById(lastBlockFullId);
    }

    function getLastBlockId() {
        const [lastBlockFullId] = blocksInThisPart.slice(-1);
        return removeBlockFromAllIds(lastBlockFullId);
    }

    function checkEmptyParams() {
        const empty_id = partId === '';
        return empty_id
            ? finish()
            : getLastBlockId();
    }

    return checkEmptyParams();
});

export default removeBlock;
