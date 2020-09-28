import addPart from '../addPart';

describe('addPart', () => {
    it('should add new part at the end of the tab', () => {
        const state = {};
        const action = addPart(state);
        const result = {
            allIds: [1],
            byId: { 1: { id: 1 } },
        };
        expect(action.parts).toStrictEqual(result);
    });

    it('should start with 1 empty block in this part', () => {
        const state = {};
        const action = addPart(state);
        const result = {
            allIds: ['1-1'],
            byId: { '1-1': { id: '1-1' } },
        };
        expect(action.blocks).toStrictEqual(result);
    });

    it('should have empty block with 5 columns in it', () => {
        const state = {};
        const action = addPart(state);
        const result = {
            allIds: ['1-1-1', '1-1-2', '1-1-3', '1-1-4', '1-1-5'],
            byId: {
                '1-1-1': { id: '1-1-1' },
                '1-1-2': { id: '1-1-2' },
                '1-1-3': { id: '1-1-3' },
                '1-1-4': { id: '1-1-4' },
                '1-1-5': { id: '1-1-5' },
            },
        };
        expect(action.columns).toStrictEqual(result);
    });
});
