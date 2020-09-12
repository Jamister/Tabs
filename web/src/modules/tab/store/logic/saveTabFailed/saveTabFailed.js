/* eslint-disable no-param-reassign */
import produce from 'immer';

const saveTabFailed = produce((draft) => {
    function finish() {
        return draft;
    }

    function resetSaving() {
        draft.isSaving = false;
        draft.savingError = ''; // TODO
        return finish();
    }

    return resetSaving();
});

export default saveTabFailed;
