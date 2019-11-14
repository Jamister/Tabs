const tab = {
	selected_note: {
		p: 0,
		b: 0,
		c: 0,
		l: 0,
	},
	lines: [1, 2, 3, 4, 5, 6],
	notes: {},
	parts: {
		all_ids: [1],
		by_id: {
			1: { id: 1 },
		},
	},
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
				block_id: 1,
				id: '1-2-1',
			},
			'1-2-2': {
				part_id: 1,
				block_id: 1,
				id: '1-2-2',
			},
			'1-2-3': {
				part_id: 1,
				block_id: 1,
				id: '1-2-3',
			},
			'1-2-4': {
				part_id: 1,
				block_id: 1,
				id: '1-2-4',
			},
		},
	},
	// parts: {
	// 	all_ids: [1],
	// 	by_id: {
	// 		1: {
	// 			id: 1,
	// 			blocks: {
	// 				all_ids: [1, 2],
	// 				by_id: {
	// 					1: {
	// 						id: 1,
	// 						columns: [1, 2, 3, 4],
	// 					},
	// 					2: {
	// 						id: 2,
	// 						columns: [1, 2, 3, 4],
	// 					},
	// 				},
	// 			},
	// 		},
	// 	},
	// },
};

export default tab;
