import produce from 'immer';
import removeBlock from '../removeBlock';
import tab from '../../../store';

describe('removeBlock', () => {
    const state = produce(tab, draft => {
        draft.parts = {
            allIds: ['p1'],
            byId: {
                'p1': { type: 'tablature' },
            },
        };
        draft.blocks = {
            allIds: ['p1-b1', 'p1-b2', 'p1-b3'],
            byId: {
                'p1-b1': {},
                'p1-b2': {},
                'p1-b3': {},
            },
        };
        draft.columns = {
            allIds: ['p1-b3-c1', 'p1-b3-c2', 'p1-b3-c3', 'p1-b3-c4', 'p1-b3-c5', 'p1-b3-c6'],
            byId: {
                'p1-b3-c1': {},
                'p1-b3-c2': {},
                'p1-b3-c3': {},
                'p1-b3-c4': {},
                'p1-b3-c5': {},
                'p1-b3-c6': {},
            },
        };
    });
    const action = { part_id: 'p1' };
    const result = removeBlock(state, action);

    it('should remove last block of part 1', () => {
        expect(result.blocks.allIds).toHaveLength(2);
        expect(result.columns.allIds).toHaveLength(0);
        const columnsById = Object.keys(result.columns.byId);
        expect(columnsById).toHaveLength(0);
    });

    it('should remove all columns from the block', () => {
        expect(result.columns.allIds).toHaveLength(0);
        const columnsById = Object.keys(result.columns.byId);
        expect(columnsById).toHaveLength(0);
    });
});

describe('removeBlock', () => {
    const state = produce(tab, draft => {
        draft.parts = {
            allIds: ['p1', 'p2', 'p3'],
            byId: {
                'p1': { type: 'tablature' },
                'p2': { type: 'tablature' },
                'p3': { type: 'tablature' },
            },
        };
        draft.blocks = {
            allIds: ['p1-b1', 'p1-b2', 'p2-b1', 'p2-b2', 'p3-b1', 'p3-b2'],
            byId: {
                'p1-b1': {},
                'p1-b2': {},
                'p2-b1': {},
                'p2-b2': {},
                'p3-b1': {},
                'p4-b2': {},
            },
        };
        draft.columns = {
            allIds: ['p1-b1-c1', 'p2-b2-c1', 'p2-b2-c2', 'p2-b2-c3'],
            byId: {
                'p1-b1-c1': {},
                'p2-b2-c1': {},
                'p2-b2-c2': {},
                'p2-b2-c3': {},
            },
        };
    });
    const action = { part_id: 'p2' };
    const result = removeBlock(state, action);

    it('should remove last block of part 2, with 3 existing parts', () => {
        expect(result.blocks.allIds).toHaveLength(5);
        expect(result.blocks.allIds).not.toContain('p2-b2');
        expect(result.blocks.byId).not.toHaveProperty('p2-b2');
    });

    it('should remove all columns from last block of part 2, with 3 existing parts', () => {
        expect(result.columns.allIds).toHaveLength(1);
        expect(result.columns.allIds).toContain('p1-b1-c1');
    });
});

describe('removeBlock', () => {
    const state = produce(tab, draft => {
        draft.parts = {
            allIds: ['p1', 'p2', 'p3'],
            byId: {
                'p1': { type: 'tablature' },
                'p2': { type: 'tablature' },
                'p3': { type: 'tablature' },
            },
        };
        draft.blocks = {
            allIds: ['p1-b1', 'p1-b2', 'p2-b1', 'p3-b1', 'p3-b2'],
            byId: {
                'p1-b1': {},
                'p1-b2': {},
                'p2-b1': {},
                'p3-b1': {},
                'p4-b2': {},
            },
        };
        draft.columns = {
            allIds: ['p1-b1-c1', 'p2-b2-c1', 'p2-b2-c2', 'p2-b2-c3'],
            byId: {
                'p1-b1-c1': {},
                'p2-b1-c1': {},
                'p2-b1-c2': {},
                'p2-b1-c3': {},
            },
        };
    });
    const action = { part_id: 'p2' };
    const result = removeBlock(state, action);

    it('should remove part if has no blocks left', () => {
        expect(result.parts.allIds).toHaveLength(2);
        expect(result.parts.allIds).not.toContain('p2');
        expect(result.parts.byId).not.toHaveProperty('p2');
        expect(result.blocks.allIds).toHaveLength(4);
        expect(result.blocks.allIds).not.toContain('p2-b1');
        expect(result.blocks.byId).not.toHaveProperty('p2-b1');
    });
});

