const tab = {
    title: 'Invalid Litter Dept.',
    // instrument: 'guitar',
    // tune: ['e', 'B', 'G', 'D', 'A', 'E'],
    // lines: [1, 2, 3, 4, 5, 6],
    // user_is_writing: 'notes',
    // selected_note: {
    // 	p: 0, b: 0, c: 0, l: 0,
    // },
    // notes: {},
    parts: {
        all_ids: [],
        by_id: {},
    },
    blocks: {
        all_ids: [],
        by_id: {},
    },
    columns: {
        all_ids: [],
        by_id: {},
    },
    // printed_tab: '',

    instrument: 'guitar',
    selected_note: {
        p: 0,
        b: 0,
        c: 0,
        l: 0,
    },
    tune: ['e', 'B', 'G', 'D', 'A', 'E'],
    lines: [1, 2, 3, 4, 5, 6],
    user_is_writing: 'notes',
    notes: {},
    // parts: {
    //     all_ids: [1, 2],
    //     by_id: {
    //         1: { type: 'tablature' },
    //         2: { type: 'lyric' },
    //     },
    // },
    // blocks: {
    //     all_ids: ['1-1', '1-2'],
    //     by_id: {
    //         '1-1': {},
    //         '1-2': {},
    //     },
    // },
    // columns: {
    //     all_ids: [
    //         '1-1-1',
    //         '1-1-2',
    //         '1-1-3',
    //         '1-1-4',
    //         '1-1-5',
    //         '1-2-1',
    //         '1-2-2',
    //         '1-2-3',
    //         '1-2-4',
    //         '1-2-5',
    //     ],
    //     by_id: {
    //         '1-1-1': {},
    //         '1-1-2': {},
    //         '1-1-3': {},
    //         '1-1-4': {},
    //         '1-1-5': {},
    //         '1-2-1': {},
    //         '1-2-2': {},
    //         '1-2-3': {},
    //         '1-2-4': {},
    //         '1-2-5': {},
    //     },
    // },
    printed_tab: '',
    // lyric_chords: {
    // 	1: {
    // 		lyric_line_id: '1',
    // 		chord: 'B',
    // 		version: 1,
    // 		position: 10,
    // 	},
    // },
    // 'tablature/lyric'
    lyric_lines: {
        all_ids: ['2-1'],
        by_id: {
            '2-1': {
                id: '2-1',
                lyric: 'Sing as their bones go marching in',
            },
        },
    },
    lyric_chords: {
        all_ids: ['1-1', '1-2'],
        by_id: {
            '1-1': {
                id: '1-1',
                lyric_line_id: '2-1',
                chord: 'B',
                chord_version: 1,
                position: 10,
            },
            '1-2': {
                id: '1-2',
                lyric_line_id: '2-1',
                chord: 'B',
                chord_version: 1,
                position: 10,
            },
        },
    },
};

export default tab;
