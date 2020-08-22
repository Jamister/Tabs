/* eslint-disable no-param-reassign */
import produce from 'immer';

const selectNote = produce((draft, action) => {
    function saveState(new_selected_note) {
        draft.selected_note = new_selected_note;
        return draft;
    }

    function buildSelectNoteObject() {
        const { p, b, c, l } = action.note || {};
        const new_selected_note = { p, b, c, l };
        saveState(new_selected_note);
    }

    buildSelectNoteObject();
});

export default selectNote;
