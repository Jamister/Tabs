const tab = {
	instrument: 'guitar',
	selected_note: {
		p: 0,
		b: 0,
		c: 0,
		l: 0,
	},
	tune: ['e', 'a', 'd', 'g', 'b', 'e'],
	lines: [1, 2, 3, 4, 5, 6],
	user_is_writing: 'notes',
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
			'1-1-5',
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
			'1-1-5': {
				part_id: 1,
				block_id: 1,
				id: '1-1-5',
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
	},
	printed_tab: '',
	pressed_key: '',
};

export default tab;
