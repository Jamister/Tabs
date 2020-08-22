/* eslint-disable no-param-reassign */
import produce from 'immer';

const changedWritingType = produce((draft, action) => {
    const user_is_writing = action.writing || 'notes';
    const selected_note = {
        p: 0,
        b: 0,
        c: 0,
        l: 0,
    };
    draft.selected_note = selected_note;
    draft.user_is_writing = user_is_writing;
    return draft;
});

export default changedWritingType;
