export const selectNote = (state, action) => {
	const { p, b, c, l } = action;
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
