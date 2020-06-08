/* eslint-disable */
const removeEmptyColumn = (state = {}, action = {}) => {
	function checkBlank() {
		console.log('--> removeEmptyColumn');
		return { ...state };
	}

	return checkBlank();
};

export default removeEmptyColumn;
