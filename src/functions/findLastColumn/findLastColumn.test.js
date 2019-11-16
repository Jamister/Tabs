import { findLastColumn } from './findLastColumn';

test('should not crash', () => {
	expect(findLastColumn()).toBe(1);
	expect(findLastColumn(null, null, null)).toBe(1);
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
	const last_column = findLastColumn(columns, 1, 1);
	expect(last_column).toBe(4);
});

