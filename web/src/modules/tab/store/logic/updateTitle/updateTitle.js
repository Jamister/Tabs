/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';

const updateTitle = produce((draft, action) => {
    function finish() {
        return draft;
    }

    function setLastChange() {
        draft.lastChange = getDateNow();
        return finish();
    }

    function setTitle() {
        const newTitle = action?.title || '';
        draft.title = newTitle;
        return setLastChange();
    }

    return setTitle();
});

export default updateTitle;
