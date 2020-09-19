/* eslint-disable no-param-reassign */
import produce from 'immer';
import tabDefaultValues from 'modules/tab/utils/tabDefaultValues';

const clearTabValues = produce((draft) => {
    function finish() {
        return draft;
    }

    function clearValues() {
        draft.tabHashId = '';
        draft.lastChange = 0;
        draft.title = '';
        draft.artist = '';
        draft.tuning = tabDefaultValues.tuning;
        draft.notes = {};
        draft.parts = {
            all_ids: [],
            by_id: {},
        };
        draft.blocks = {
            all_ids: [],
            by_id: {},
        };
        draft.columns = {
            all_ids: [],
            by_id: {},
        };
        return finish();
    }

    return clearValues();
});

export default clearTabValues;
