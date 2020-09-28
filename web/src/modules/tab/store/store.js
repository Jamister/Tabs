import tabDefaultValues from 'modules/tab/utils/tabDefaultValues';

const tab = {
    tabHashId: '',
    lastChange: 0,
    isSaving: false,
    savingError: null,
    title: '',
    artist: '',
    instrument: tabDefaultValues.instrument,
    tuning: tabDefaultValues.tuning,
    lines: tabDefaultValues.lines,
    user_is_writing: 'notes',
    selected_note: {
        p: 0, b: 0, c: 0, l: 0,
    },
    notes: {},
    parts: {
        allIds: [],
        byId: {},
    },
    blocks: {
        allIds: [],
        byId: {},
    },
    columns: {
        allIds: [],
        byId: {},
    },
    printed_tab: '',
    // parts: {
    //     allIds: [1, 2],
    //     byId: {
    //         1: { type: 'tablature' },
    //         2: { type: 'lyric' },
    //     },
    // },
    lyric_lines: {
        allIds: ['2-1'],
        byId: {
            '2-1': {
                id: '2-1',
                lyric: 'Sing as their bones go marching in',
            },
        },
    },
    lyric_chords: {
        allIds: ['1-1', '1-2'],
        byId: {
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
