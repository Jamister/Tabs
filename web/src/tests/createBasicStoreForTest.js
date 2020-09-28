import tabDefaultValues from 'modules/tab/utils/tabDefaultValues';

export const testStore = {
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
};
