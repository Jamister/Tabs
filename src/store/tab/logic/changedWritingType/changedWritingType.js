const changedWritingType = (state = {}, action = {}) => {
	const user_is_writing = action.writing || 'notes';
	const selected_note = {
		p: 0,
		b: 0,
		c: 0,
		l: 0,
	};
	return {
		...state,
		selected_note,
		user_is_writing,
	};
};

export default changedWritingType;
