/* eslint-disable no-param-reassign */
import produce from 'immer';

const updateTitle = produce((draft, action) => {
    const new_title = action.title || '';
    draft.title = new_title;
    return draft;
});

export default updateTitle;
