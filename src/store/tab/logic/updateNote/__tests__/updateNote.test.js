import updateNote from '../updateNote';

test('updateNote should not crash', () => {
	const test_empty = updateNote();
	expect(test_empty).toStrictEqual({});
});

describe('updateNote', () => {
	const notes = {
		'1-1-2-3': { value: '2' },
	};
	const columns = {
		all_ids: [
			'1-1-1',
			'1-1-2',
			'1-1-3',
			'1-1-4',
		],
		by_id: {
			'1-1-1': {
				part_id: 1,
				block_id: 1,
				id: '1-1-1',
			},
			'1-1-2': {
				part_id: 1,
				block_id: 1,
				id: '1-1-2',
			},
			'1-1-3': {
				part_id: 1,
				block_id: 1,
				id: '1-1-3',
			},
			'1-1-4': {
				part_id: 1,
				block_id: 1,
				id: '1-1-4',
			},
		},
	};

	it('should change note to 2', () => {
		const selected_note = { p: 1, b: 1, c: 1, l: 3 };
		const state = {
			selected_note,
			notes,
			columns,
		};
		const action = updateNote(state, { key_code: 50 });
		expect(action).toStrictEqual({
			selected_note,
			columns,
			notes: {
				'1-1-2-3': { value: '2' },
				'1-1-1-3': { value: '2' },
			},
		});
	});

	it('should change note to 21', () => {
		const selected_note = { p: 1, b: 1, c: 2, l: 3 };
		const state = {
			selected_note,
			notes,
			columns,
		};
		const action = updateNote(state, { key_code: 49 });
		expect(action).toStrictEqual({
			selected_note,
			columns,
			notes: {
				'1-1-2-3': { value: '21' },
			},
		});
	});
});
