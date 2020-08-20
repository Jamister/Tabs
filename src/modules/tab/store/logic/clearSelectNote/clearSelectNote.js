const clearSelectNote = (_state) => {
    const state = _state || {};
    const selected_note = {
        p: 0,
        b: 0,
        c: 0,
        l: 0,
    };

    return {
        ...state,
        selected_note,
    };
};

export default clearSelectNote;
