/* eslint-disable no-param-reassign */
import produce from 'immer';

const saveTab = produce((draft) => {
    function finish() {
        return draft;
    }

    function setSaving() {
        draft.lastChange = 0;
        draft.isSaving = true;
        draft.savingError = null;
        return finish();
    }

    return setSaving();
});

export default saveTab;
