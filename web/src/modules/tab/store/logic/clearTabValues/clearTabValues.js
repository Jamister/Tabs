/* eslint-disable no-param-reassign */
import produce from 'immer';
import tabDefaultValues from 'modules/tab/utils/tabDefaultValues';

const clearTabValues = produce((draft) => {
    function finish() {
        return draft;
    }

    function clearValues() {
        draft.savingError = null;
        draft.tabHashId = '';
        draft.lastChange = 0;
        draft.title = '';
        draft.artist = '';
        draft.tuning = tabDefaultValues.tuning;
        draft.notes = {};
        draft.parts = {
            allIds: [],
            byId: {},
        };
        draft.blocks = {
            allIds: [],
            byId: {},
        };
        draft.columns = {
            allIds: [],
            byId: {},
        };
        return finish();
    }

    return clearValues();
});

export default clearTabValues;
