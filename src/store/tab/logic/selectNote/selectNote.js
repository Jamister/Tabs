export const selectNote = (_state, _action) => {
	const state = _state || {};
	const action = _action || {};
	const { p, b, c, l } = action.note || {};

	if (p === undefined) {
		return { ...state };
	}

	const selected_note = {
		p: Number(p),
		b: Number(b),
		c: Number(c),
		l: Number(l),
	};

	return {
		...state,
		selected_note,
	};
};
