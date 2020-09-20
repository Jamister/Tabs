import loadTabIntoStore from '../loadTabIntoStore';

describe('Load Tab Into Store', () => {
    const content = {
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
        notes: {},
        lines: [1, 2, 3, 4, 5, 6],
    }
    const payload = {
        hashId: 'g4s5g',
        title: 'Title test',
        artist: 'Artist test',
        tuning: 'e,A,B,E,E,E',
        instrument: 'guitar',
        private: false,
        content: JSON.stringify(content),
    };
    const action = { payload };

    it('should load the tab data into the store', () => {
        expect(loadTabIntoStore({}, action)).toStrictEqual({
            ...content,
            tabHashId: 'g4s5g',
            title: 'Title test',
            artist: 'Artist test',
            tuning: ['e', 'A', 'B', 'E', 'E', 'E'],
            instrument: 'guitar',
            private: false,
            lastChange: 0,
        });
    });
});
