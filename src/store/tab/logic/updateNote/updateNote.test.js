import { updateNote } from './updateNote';

test('updateNote should not crash', () => {
	const test_empty = updateNote();
	expect(test_empty).toStrictEqual({});
});

