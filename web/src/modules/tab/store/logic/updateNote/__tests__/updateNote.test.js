import produce from 'immer';
import updateNote from '../updateNote';
import tab from '../../../store';

describe('updateNote', () => {
    it('should add note 6', () => {
        const state = produce(tab, draft => {
            draft.selected_note = {
                p: 'p1', b: 'b1', c: 'c2', l: '6',
            };
            draft.notes = {
                'p1-b1-c2-3': { value: '2' },
            };
        });
        const action = { key: '6' };
        const result = updateNote(state, action);
        expect(result.notes).toStrictEqual({
            'p1-b1-c2-3': { value: '2' },
            'p1-b1-c2-6': { value: '6' },
        });
    });

    it('should change note 21', () => {
        const state = produce(tab, draft => {
            draft.selected_note = {
                p: 'p1', b: 'b1', c: 'c2', l: '3',
            };
            draft.notes = {
                'p1-b1-c2-3': { value: '2' },
            };
        });
        const action = { key: '1' };
        const result = updateNote(state, action);
        expect(result.notes).toStrictEqual({
            'p1-b1-c2-3': { value: '21' },
        });
    });

    it('should delete note', () => {
        const state = produce(tab, draft => {
            draft.selected_note = {
                p: 'p1', b: 'b1', c: 'c2', l: '3',
            };
            draft.notes = {
                'p1-b1-c2-3': { value: '2' },
            };
        });
        const action = { key: 'Delete' };
        const result = updateNote(state, action);
        expect(result.notes).toStrictEqual({
            'p1-b1-c2-3': { value: '' },
        });
    });

    it('should delete last char of note value', () => {
        const state = produce(tab, draft => {
            draft.selected_note = {
                p: 'p1', b: 'b1', c: 'c2', l: '3',
            };
            draft.notes = {
                'p1-b1-c2-3': { value: '12b' },
            };
        });
        const action = { key: 'Backspace' };
        const result = updateNote(state, action);
        expect(result.notes).toStrictEqual({
            'p1-b1-c2-3': { value: '12' },
        });
    });
});
