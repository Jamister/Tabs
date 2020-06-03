import { selectNote } from '../selectNote';

test('selectNote should not crash', () => {
	const test_empty = selectNote();
	expect(test_empty).toStrictEqual({});
});

test('should select note 1-1-1-1', () => {
	const state = {};
	const action = {
		note: {
			p: 1,
			b: 2,
			c: 1,
			l: 3,
		},
	};
	const result = selectNote(state, action);
	expect(result).toStrictEqual({
		selected_note: {
			p: 1,
			b: 2,
			c: 1,
			l: 3,
		},
	});
});
