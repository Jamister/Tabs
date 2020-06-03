import exportTabFormatTxt from '../exportTabFormatTxt';

test('exportTabFormatTxt should not crash', () => {
	const test_empty = exportTabFormatTxt();
	expect(test_empty.printed_tab).toEqual('');
});

test('should export tab in string format', () => {
	const state = {
		selected_note: { p: 0, b: 0, c: 0, l: 0 },
		lines: [1, 2, 3, 4, 5, 6],
		notes: {
			'1-1-2-3': { value: '2' },
			'1-1-3-4': { value: '6' },
			'1-2-1-1': { value: '1' },
			'1-2-2-2': { value: '2' },
			'1-2-3-3': { value: '3' },
			'1-2-4-4': { value: '4' },
		},
		parts: {
			all_ids: [1, 2],
			by_id: {
				1: { id: 1 },
				2: { id: 2 },
			},
		},
		blocks: {
			all_ids: [
				'1-1',
				'1-2',
				'2-1',
				'2-2',
			],
			by_id: {
				'1-1': {
					part_id: 1,
					id: '1-1',
				},
				'1-2': {
					part_id: 1,
					id: '1-2',
				},
				'2-1': {
					part_id: 2,
					id: '2-1',
				},
				'2-2': {
					part_id: 2,
					id: '2-2',
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
				'2-1-1',
				'2-1-2',
				'2-1-3',
				'2-1-4',
				'2-2-1',
				'2-2-2',
				'2-2-3',
				'2-2-4',
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
				'2-1-1': {
					part_id: 2,
					block_id: 1,
					id: '2-1-1',
				},
				'2-1-2': {
					part_id: 2,
					block_id: 1,
					id: '2-1-2',
				},
				'2-1-3': {
					part_id: 2,
					block_id: 1,
					id: '2-1-3',
				},
				'2-1-4': {
					part_id: 2,
					block_id: 1,
					id: '2-1-4',
				},
				'2-2-1': {
					part_id: 2,
					block_id: 2,
					id: '2-2-1',
				},
				'2-2-2': {
					part_id: 2,
					block_id: 2,
					id: '2-2-2',
				},
				'2-2-3': {
					part_id: 2,
					block_id: 2,
					id: '2-2-3',
				},
				'2-2-4': {
					part_id: 2,
					block_id: 2,
					id: '2-2-4',
				},
			},
		},
	};
	const result = exportTabFormatTxt(state);
	const tab_in_string_format = `
|--------------|--1-----------|
|--------------|-----2--------|
|-----2--------|--------3-----|
|--------6-----|-----------4--|
|--------------|--------------|
|--------------|--------------|


|--------------|--------------|
|--------------|--------------|
|--------------|--------------|
|--------------|--------------|
|--------------|--------------|
|--------------|--------------|

`;
	expect(result.printed_tab).toBe(tab_in_string_format);
});
