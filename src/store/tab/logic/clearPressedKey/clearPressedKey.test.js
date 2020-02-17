import { clearPressedKey } from './clearPressedKey';

it('clearPressedKey should not crash', () => {
	const test_empty = clearPressedKey();
	expect(test_empty).toStrictEqual({
		pressed_key: '',
	});
});

it('should clear the pressed key', () => {
	const state = {
		pressed_key: 'shift',
	};
	const result = clearPressedKey(state);
	expect(result).toStrictEqual({
		pressed_key: '',
	});
});
