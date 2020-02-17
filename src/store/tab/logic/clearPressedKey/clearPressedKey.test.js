import { holdPressedKey } from './holdPressedKey';

test('holdPressedKey should not crash', () => {
	const test_empty = holdPressedKey();
	expect(test_empty).toStrictEqual({
		selected_note: {
			p: 0,
			b: 0,
			c: 0,
			l: 0,
		},
	});
});

test('should clear the selected note', () => {
	const state = {
		blocks: {},
	};
	const result = holdPressedKey(state);
	expect(result).toStrictEqual({
		blocks: {},
		selected_note: {
			p: 0,
			b: 0,
			c: 0,
			l: 0,
		},
	});
});
