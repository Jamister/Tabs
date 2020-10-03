import produce from 'immer';
import clearTabValues from '../clearTabValues';
import tab from '../../../store';
import tabDefaultValues from 'modules/tab/utils/tabDefaultValues';

describe('clearTabValues', () => {
    it('should clear the selected note', () => {
        const state = produce(tab, draft => {
            draft.savingError = 'General error';
            draft.tabHashId = 'f8a7df5g';
            draft.lastChange = 4537567445;
            draft.title = 'Test Title';
            draft.artist = 'Me';
            draft.tuning = [];
            draft.notes = {
                '1-1-1-1': { value: '21' },
            };
            draft.parts = {
                allIds: ['1'],
                byId: { '1': {} },
            };
            draft.blocks = {
                allIds: ['1'],
                byId: { '1': {} },
            };
            draft.columns = {
                allIds: ['1'],
                byId: { '1': {} },
            };
        });
        const result = clearTabValues(state);
        expect(result.savingError).toBe(null);
        expect(result.tabHashId).toBe('');
        expect(result.lastChange).toBe(0);
        expect(result.title).toBe('');
        expect(result.artist).toBe('');
        expect(result.tuning).toStrictEqual(tabDefaultValues.tuning);
        expect(result.notes).toStrictEqual({});
        expect(result.parts).toStrictEqual({
            allIds: [],
            byId: {},
        });
        expect(result.blocks).toStrictEqual({
            allIds: [],
            byId: {},
        });
        expect(result.columns).toStrictEqual({
            allIds: [],
            byId: {},
        });
    });
});
