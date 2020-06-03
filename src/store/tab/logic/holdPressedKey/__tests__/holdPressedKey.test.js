import { holdPressedKey } from '../holdPressedKey';

it('should not crash holdPressedKey', () => {
	const test_empty = holdPressedKey();
	expect(test_empty).toStrictEqual({
		pressed_key: '',
	});
});

it('should hold the SHIFT holdPressedKey', () => {
	const state = {};
	const action = { key_code: 16 };
	const result = holdPressedKey(state, action);
	expect(result).toStrictEqual({
		pressed_key: 'shift'
	});
});

it('should not hold anything holdPressedKey', () => {
	const state = {};
	const action = { key_code: 90 };
	const result = holdPressedKey(state, action);
	expect(result).toStrictEqual({
		pressed_key: ''
	});
});
