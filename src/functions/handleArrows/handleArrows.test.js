import { handleArrows } from './handleArrows';

test('should not crash', () => {
	expect(handleArrows()).toStrictEqual({ p: 1, b: 1, c: 1, l: 1 });
	expect(handleArrows(null, null)).toStrictEqual({ p: 1, b: 1, c: 1, l: 1 });
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
	const tab = {
		selected_note,
		columns,
		lines,
	};

	it('should move left', () => {
		expect(handleArrows(37, tab))
			.toStrictEqual({ p: 1, b: 1, c: 1, l: 3 });
	});

	it('should move right', () => {
		expect(handleArrows(39, tab))
			.toStrictEqual({ p: 1, b: 1, c: 3, l: 3 });
	});

	it('should move top', () => {
		expect(handleArrows(38, tab))
			.toStrictEqual({ p: 1, b: 1, c: 2, l: 2 });
	});

	it('should move bottom', () => {
		expect(handleArrows(40, tab))
			.toStrictEqual({ p: 1, b: 1, c: 2, l: 4 });
	});
});
