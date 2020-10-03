/* eslint-disable no-param-reassign */
import produce from 'immer';

const clearSelectedNote = produce((draft) => {
    function resetSelectedNote() {
        const clear_selected_note = {
            p: 0,
            b: 0,
            c: 0,
            l: 0,
        };
        draft.selected_note = clear_selected_note;
        return draft;
    }

    resetSelectedNote();
});

export default clearSelectedNote;
