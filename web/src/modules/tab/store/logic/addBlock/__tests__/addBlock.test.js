import { createDraft, finishDraft } from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';
import addBlock from '../addBlock';
import tab from '../../../store';

describe('addBlock', () => {
    const draft = createDraft(tab);
    draft.parts = {
        allIds: ['63cca1b2'],
        byId: {
            '63cca1b2': { type: 'tablature' },
        },
    };
    const state = finishDraft(draft);

    it('should create block id', () => {
        expect(state.blocks).toStrictEqual({
            allIds: [],
            byId: {},
        });
        const action = { part_id: '63cca1b2' };
        const result = addBlock(state, action);
        const blockId = result.blocks.allIds[0];
        expect(result.blocks).toStrictEqual({
            allIds: [blockId],
            byId: {
                [blockId]: {},
            },
        });
    });

    it('should create block columns', () => {
        const action = { part_id: '63cca1b2' };
        const result = addBlock(state, action);
        expect(result.columns.allIds).toHaveLength(5);
        const firstColumnId = result.columns.allIds[0];
        expect(result.columns.byId).toHaveProperty(firstColumnId);
    });

    it('should set last change with date now', () => {
        const action = { part_id: '63cca1b2' };
        const result = addBlock(state, action);
        const dateNow = getDateNow();
        expect(result.lastChange).not.toBe(0);
        expect(result.lastChange).toBe(dateNow);
    });
});
