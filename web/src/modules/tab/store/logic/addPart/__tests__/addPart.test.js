import { createDraft, finishDraft } from 'immer';
import addPart from '../addPart';
import tab from '../../../store';

describe('addPart', () => {
    it('should add new part', () => {
        expect(tab.parts).toStrictEqual({
            allIds: [],
            byId: {},
        });
        const result = addPart(tab);
        const partId = result.parts.allIds[0];
        expect(result.parts).toStrictEqual({
            allIds: [partId],
            byId: {
                [partId]: { type: 'tablature' },
            },
        });
    });

    it('should add 1 block for this part', () => {
        const draft = createDraft(tab);
        draft.blocks = {
            allIds: ['1', '2'],
            byId: {
                '1': {},
                '2': {},
            },
        };
        const state = finishDraft(draft);
        const result = addPart(state);
        expect(result.blocks.allIds).toHaveLength(3);
    });

    it('should have empty block with 5 columns in it', () => {
        const result = addPart(tab);
        expect(result.blocks.allIds).toHaveLength(1);
        expect(result.columns.allIds).toHaveLength(5);
        const [lastColumnFullId] = result.columns.allIds.slice(-1);
        expect(result.columns.byId).toHaveProperty(lastColumnFullId);
    });
});
