import produce from 'immer';
import removeColumn from '../removeColumn';
import tab from '../../../store';

describe('removeColumn', () => {
    it('should not remove column if block has only one', () => {
        const state = produce(tab, draft => {
            draft.columns = {
                allIds: ['p1-b1-c1'],
                byId: { 'p1-b1-c1': {} },
            };
            draft.selected_note = {
                p: 'p1', b: 'b1', c: 'c1', l: '1',
            };
        });
        const result = removeColumn(state);
        expect(result.columns.allIds).toHaveLength(1);
        expect(result.columns.byId).toHaveProperty('p1-b1-c1');
    });
});

describe('removeColumn', () => {
    const state = produce(tab, draft => {
        draft.columns = {
            allIds: ['p1-b1-c1', 'p1-b1-c2'],
            byId: {
                'p1-b1-c1': {},
                'p1-b1-c2': {},
            },
        };
        draft.notes = {
            'p1-b1-c2-1': { value: '21' },
        };
        draft.selected_note = {
            p: 'p1', b: 'b1', c: 'c2', l: '1',
        };
    });
    const result = removeColumn(state);

    it('should remove column', () => {
        expect(result.columns.allIds).toHaveLength(1);
        expect(result.columns.byId).not.toHaveProperty('p1-b1-c2');
    });

    it('should remove all notes from that column', () => {
        expect(result.notes).not.toHaveProperty('p1-b1-c2');
    });

    it('should move selected note to the column before, if it was the last one on the block', () => {
        expect(result.selected_note).toStrictEqual({
            p: 'p1', b: 'b1', c: 'c1', l: '1',
        });
    });
});

describe('removeColumn', () => {
    const state = produce(tab, draft => {
        draft.columns = {
            allIds: ['p1-b1-c1', 'p1-b1-c2'],
            byId: {
                'p1-b1-c1': {},
                'p1-b1-c2': {},
            },
        };
        draft.notes = {
            'p1-b1-c1-1': { value: 'c1' },
            'p1-b1-c2-1': { value: 'c2' },
        };
        draft.selected_note = {
            p: 'p1', b: 'b1', c: 'c1', l: '1',
        };
    });
    const result = removeColumn(state);

    it('should remove column', () => {
        expect(result.columns.allIds).toHaveLength(1);
        expect(result.columns.byId).not.toHaveProperty('p1-b1-c1');
    });

    it('should remove all notes from that column', () => {
        expect(result.notes).toStrictEqual({
            'p1-b1-c2-1': { value: 'c2' },
        });
    });

    it('should move selected note to the next column', () => {
        expect(result.selected_note).toStrictEqual({
            p: 'p1', b: 'b1', c: 'c2', l: '1',
        });
    });
});
