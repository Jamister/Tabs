import moveSelectedNote from '../moveSelectedNote';

test('should not crash', () => {
	expect(moveSelectedNote()).toStrictEqual({
		selected_note: { p: 1, b: 1, c: 1, l: 1 },
	});
	expect(moveSelectedNote(null, null)).toStrictEqual({
		selected_note: { p: 1, b: 1, c: 1, l: 1 },
	});
});

describe('Moves', () => {
	const selected_note = { p: 1, b: 1, c: 2, l: 3 };
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
	const lines = [1, 2, 3, 4, 5, 6];
	const state = {
		selected_note,
		columns,
		lines,
	};

	const action_left = { key_code: 37 };
	it('should move left', () => {
		expect(moveSelectedNote(state, action_left)).toStrictEqual({
			selected_note: { p: 1, b: 1, c: 1, l: 3 },
			columns,
			lines,
		});
	});

	const action_right = { key_code: 39 };
	it('should move right', () => {
		expect(moveSelectedNote(state, action_right)).toStrictEqual({
			selected_note: { p: 1, b: 1, c: 3, l: 3 },
			columns,
			lines,
		});
	});

	const action_top = { key_code: 38 };
	it('should move top', () => {
		expect(moveSelectedNote(state, action_top)).toStrictEqual({
			selected_note: { p: 1, b: 1, c: 2, l: 2 },
			columns,
			lines,
		});
	});

	const action_bottom = { key_code: 40 };
	it('should move bottom', () => {
		expect(moveSelectedNote(state, action_bottom)).toStrictEqual({
			selected_note: { p: 1, b: 1, c: 2, l: 4 },
			columns,
			lines,
		});
	});
});
