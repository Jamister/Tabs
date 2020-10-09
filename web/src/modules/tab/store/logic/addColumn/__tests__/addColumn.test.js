import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';
import { extract } from 'modules/tab/utils/extractIds';
import addColumn from '../addColumn';
import tab from '../../../store';

describe('addColumn', () => {
    it('should do nothing, edition is not in the last column', () => {
        const state = produce(tab, draft => {
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
        });
        const action = { auto: true };
        const result = addColumn(state, action);
        expect(result.columns.allIds).toHaveLength(3);
        const [lastColumnFullId] = result.columns.allIds.slice(-1);
        expect(lastColumnFullId).toBe('63cc-g345-k57a');
    });

    it('should add new column at the end when editing', () => {
        const state = produce(tab, draft => {
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
        });
        const action = { auto: true };
        const result = addColumn(state, action);
        expect(result.columns.allIds).toHaveLength(4);
        const [lastColumnFullId] = result.columns.allIds.slice(-1);
        expect(result.columns.byId).toHaveProperty(lastColumnFullId);
    });

    it('should add new column in the middle using + key', () => {
        const startAllIds = ['63cc-g345-7a8k', '63cc-g345-sdg3', '63cc-g345-k57a'];
        const state = produce(tab, draft => {
            draft.selected_note = { p: '63cc', b: 'g345', c: '7a8k', l: '2' }
            draft.columns = {
                allIds: [...startAllIds],
                byId: {
                    '63cc-g345-7a8k': {},
                    '63cc-g345-sdg3': {},
                    '63cc-g345-k57a': {},
                },
            };
        });
        const result = addColumn(state);
        expect(result.columns.allIds).toHaveLength(4);
        const newColumnFullId = result.columns.allIds[1];
        expect(result.columns.byId).toHaveProperty(newColumnFullId);
        expect(startAllIds).not.toContain(newColumnFullId);
    });

    it('should move the selected note to the new column', () => {
        const startAllIds = ['63cc-g345-7a8k', '63cc-g345-sdg3', '63cc-g345-k57a'];
        const state = produce(tab, draft => {
            draft.selected_note = { p: '63cc', b: 'g345', c: 'sdg3', l: '2' }
            draft.columns = {
                allIds: [...startAllIds],
                byId: {
                    '63cc-g345-7a8k': {},
                    '63cc-g345-sdg3': {},
                    '63cc-g345-k57a': {},
                },
            };
        });
        const result = addColumn(state);
        const newColumn = result.columns.allIds[2];
        const columnId = extract.columnId({
            full_id: newColumn,
        });
        expect(result.selected_note).toStrictEqual({
            p: '63cc', b: 'g345', c: columnId, l: '2',
        });
    });

    it('should set last change with date now', () => {
        const startAllIds = ['63cc-g345-7a8k', '63cc-g345-sdg3', '63cc-g345-k57a'];
        const state = produce(tab, draft => {
            draft.selected_note = { p: '63cc', b: 'g345', c: '7a8k', l: '2' }
            draft.columns = {
                allIds: [...startAllIds],
                byId: {
                    '63cc-g345-7a8k': {},
                    '63cc-g345-sdg3': {},
                    '63cc-g345-k57a': {},
                },
            };
        });
        const result = addColumn(state);
        const dateNow = getDateNow();
        expect(result.lastChange).toBe(dateNow);
    });
});
