/* eslint-disable no-param-reassign */
import produce from 'immer';

const loadTabIntoStore = produce((draft, action) => {
    const payload = action?.payload || {};

    function finish() {
        return draft;
    }

    function resetLastChange() {
        draft.lastChange = 0;
        return finish();
    }

    function setFullTab() {
        const tab = JSON.parse(payload.content || '{}');
        const defaultValue = { all_ids: [], by_id: {} };
        draft.parts = tab.parts || defaultValue;
        draft.blocks = tab.blocks || defaultValue;
        draft.columns = tab.columns || defaultValue;
        draft.lines = tab.lines || [1, 2, 3, 4, 5, 6];
        draft.notes = tab.notes || {};
        return resetLastChange();
    }

    function setBasicInfo() {
        draft.title = payload.title || '';
        draft.artist = payload.artist;
        draft.tuning = payload.tuning.split(',');
        draft.instrument = payload.instrument;
        draft.private = payload.private;
        return setFullTab();
    }

    function setHashId() {
        draft.tabHashId = payload.hashId;
        return setBasicInfo();
    }

    return setHashId();
});

export default loadTabIntoStore;
