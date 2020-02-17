export const holdPressedKey = (_state, _action) => {
	const state = _state || {};
	const action = _action || {};
	const { key_code } = action;
	let pressed_key = '';

	switch (key_code) {
	case 16: {
		pressed_key = 'shift';
		break;
	}

	default:
	}

	return {
		...state,
		pressed_key,
	};
};
