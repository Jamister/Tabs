import addBlock from '../addBlock';

test('addBlock should not crash', () => {
	const test_empty = addBlock();
	expect(test_empty).toStrictEqual({});
});

describe('addBlock', () => {
	const parts = {
		all_ids: [1],
		by_id: {
			1: { id: 1 },
		},
	};
	const blocks = {
		all_ids: ['1-1', '1-2'],
		by_id: {
			'1-1': {
				part_id: 1,
				id: '1-1',
			},
		},
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

	it('should add block number 2', () => {
		const state = {
			parts,
			blocks,
			columns,
		};
		const action = addBlock(state, { part_id: 1 });
		expect(action).toStrictEqual({
			parts,
			blocks: {
				all_ids: ['1-1', '1-2'],
				by_id: {
					'1-1': {
						part_id: 1,
						id: '1-1',
					},
					'1-2': {
						part_id: 1,
						id: '1-2',
					},
				},
			},
			columns: {
				all_ids: [
					'1-1-1',
					'1-1-2',
					'1-1-3',
					'1-1-4',
					'1-2-1',
					'1-2-2',
					'1-2-3',
					'1-2-4',
					'1-2-5',
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
					'1-2-1': {
						part_id: 1,
						block_id: 2,
						id: '1-2-1',
					},
					'1-2-2': {
						part_id: 1,
						block_id: 2,
						id: '1-2-2',
					},
					'1-2-3': {
						part_id: 1,
						block_id: 2,
						id: '1-2-3',
					},
					'1-2-4': {
						part_id: 1,
						block_id: 2,
						id: '1-2-4',
					},
					'1-2-5': {
						part_id: 1,
						block_id: 2,
						id: '1-2-5',
					},
				},
			}
		});
	});
});
