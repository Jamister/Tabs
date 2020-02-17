export const clearPressedKey = (_state) => {
	const state = _state || {};
	const pressed_key = '';

	return {
		...state,
		pressed_key,
	};
};
