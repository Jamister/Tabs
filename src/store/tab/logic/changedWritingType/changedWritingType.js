export const changedWritingType = (state = {}, action = {}) => {
	const writing = action.writing || 'notes';
	return {
		...state,
		user_is_writing: writing,
	};
};
