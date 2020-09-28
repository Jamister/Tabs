/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';

const removeBlock = produce((draft, action) => {
    const partId = action?.part_id || '';
    const blocks = draft.blocks || {};
    const blocksAllIds = blocks.allIds || [];
    const blocksById = blocks.byId || {};
    const blocksInThisPart = blocksAllIds
        .filter(b => b.indexOf(`${partId}-`) !== -1);

    function finish() {
        return draft;
    }

    function setLastChange() {
        draft.lastChange = getDateNow();
        return finish();
    }

    function removePartFromById() {
        const partsById = { ...draft?.parts?.byId };
        delete partsById[partId];
        draft.parts.byId = partsById;
        return setLastChange();
    }

    function removePartFromAllIds() {
        const partsAllIds = draft?.parts?.allIds || [];
        draft.parts.allIds = partsAllIds.filter(p => p !== partId);
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
        const newColumnsById = { ...columns.byId || {} };
        const newColumnsAllIds = (columns.allIds || [])
            .filter(id => {
                const to_delete = id.indexOf(`${lastBlockFullId}-`) === 0;
                if (to_delete) delete newColumnsById[id];
                return !to_delete;
            });
        draft.columns.allIds = newColumnsAllIds;
        draft.columns.byId = newColumnsById;
        return removeNotesInLastBlock(lastBlockFullId);
    }

    function removeBlockFromById(lastBlockFullId) {
        const newBlocksById = { ...blocksById };
        delete newBlocksById[lastBlockFullId];
        draft.blocks.byId = newBlocksById;
        return removeColumnsInLastBlock(lastBlockFullId);
    }

    function removeBlockFromAllIds(lastBlockFullId) {
        const blocksAllIdsUpdated = blocksAllIds
            .filter(blockId => blockId !== lastBlockFullId);
        draft.blocks.allIds = blocksAllIdsUpdated;
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
