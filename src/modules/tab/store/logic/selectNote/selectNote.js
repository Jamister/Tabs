const selectNote = (state = {}, action = {}) => {
    const { p, b, c, l } = action.note || {};

    if (p === undefined) {
        return { ...state };
    }

    const selected_note = { p, b, c, l };

    return {
        ...state,
        selected_note,
    };
};

export default selectNote;
