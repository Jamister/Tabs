import { findLastColumnFromPreviousBlock } from './findLastColumnFromPreviousBlock';

test('should not crash', () => {
	expect(findLastColumnFromPreviousBlock()).toBe(1);
	expect(findLastColumnFromPreviousBlock(null, null, null)).toBe(1);
});

test('should find column 4', () => {
	const columns = {
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
	const last_column = findLastColumnFromPreviousBlock(columns, 1, 1);
	expect(last_column).toBe(4);
});

