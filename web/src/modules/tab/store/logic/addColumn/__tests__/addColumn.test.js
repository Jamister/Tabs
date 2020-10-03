import { createDraft, finishDraft } from 'immer';
import addColumn from '../addColumn';
import tab from '../../../store';

describe('addColumn', () => {
    it('should do nothing, not the last column', () => {
        const draft = createDraft(tab);
        draft.selected_note = { p: '63cc', b: 'g345', c: '7a8k', l: '2' }
        draft.columns = {
            allIds: ['63cc-g345-7a8k', '63cc-g345-sdg3', '63cc-g345-k57a'],
            byId: {
                '63cc-g345-7a8k': {},
                '63cc-g345-sdg3': {},
                '63cc-g345-k57a': {},
            },
        };
        draft.notes = {
            '63cc-g345-7a8k-2': {
                value: '2'
            },
        };
        const state = finishDraft(draft);
        const result = addColumn(state);
        expect(result.columns.allIds).toHaveLength(3);
        const [lastColumnFullId] = result.columns.allIds.slice(-1);
        expect(lastColumnFullId).toBe('63cc-g345-k57a');
    });

    it('should add new column', () => {
        const draft = createDraft(tab);
        draft.selected_note = { p: '63cc', b: 'g345', c: 'k57a', l: '2' }
        draft.columns = {
            allIds: ['63cc-g345-7a8k', '63cc-g345-sdg3', '63cc-g345-k57a'],
            byId: {
                '63cc-g345-7a8k': {},
                '63cc-g345-sdg3': {},
                '63cc-g345-k57a': {},
            },
        };
        draft.notes = {
            '63cc-g345-k57a-2': {
                value: '2'
            },
        };
        const state = finishDraft(draft);
        const result = addColumn(state);
        expect(result.columns.allIds).toHaveLength(4);
        const [lastColumnFullId] = result.columns.allIds.slice(-1);
        expect(result.columns.byId).toHaveProperty(lastColumnFullId);
    });
});
