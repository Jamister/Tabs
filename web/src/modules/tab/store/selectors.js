const getNoteId = (state) => Object
    .values(state?.tab?.selected_note)
    .map(value => value)
    .join('-');

export const isNoteSelectedSelector = (state, noteId) => {
    const selectedNoteId = getNoteId(state);
    return selectedNoteId === noteId;
};

export const hasAnyNoteSelectedSelector = (state) => {
    const selectedNoteId = getNoteId(state);
    const hasAnyNoteSelected = selectedNoteId !== '0-0-0-0';
    return hasAnyNoteSelected;
};
