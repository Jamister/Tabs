import { addPart } from './addPart';

test('addPart should not crash', () => {
	const test_empty = addPart();
	expect(test_empty).toStrictEqual({});
});

describe('addPart', () => {
	it('should add new part at the end of the tab', () => {
		const state = {};
		const action = addPart(state, { part_id: 1 });
		expect(action).toStrictEqual({});
	});

	it('should start with 1 empty block in this part', () => {
		const state = {};
		const action = addPart(state, { part_id: 1 });
		expect(action).toStrictEqual({});
	});


	it('should have empty block with 5 columns in it', () => {
		const state = {};
		const action = addPart(state, { part_id: 1 });
		expect(action).toStrictEqual({});
	});
});
