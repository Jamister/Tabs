/* eslint-disable no-param-reassign */
/* Test using createDraft to update all content at the same time */
import { createDraft, finishDraft } from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';

const updateTitle = (state, action) => {
    const draft = createDraft(state);

    function finish() {
        return finishDraft(draft);
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
};

export default updateTitle;
