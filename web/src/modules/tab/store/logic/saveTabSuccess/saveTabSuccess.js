/* eslint-disable no-param-reassign */
import produce from 'immer';

const saveTabSuccess = produce((draft) => {
    function finish() {
        return draft;
    }

    function resetSaving() {
        draft.isSaving = false;
        return finish();
    }

    return resetSaving();
});

export default saveTabSuccess;
