/* eslint-disable no-param-reassign */
import produce from 'immer';

const saveTabFailed = produce((draft, action) => {
    function finish() {
        return draft;
    }

    function setError() {
        const errorMessage = action?.error.message;
        draft.savingError = errorMessage;
        return finish();
    }

    function resetSaving() {
        draft.isSaving = false;
        return setError();
    }

    return resetSaving();
});

export default saveTabFailed;
