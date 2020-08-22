export const isNoteSelectedSelector = (state, note_id) => {
    const selected_note_id = Object
        .values(state.tab.selected_note)
        .map(p => p)
        .join('-');
    return selected_note_id === note_id;
};
