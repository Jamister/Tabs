import produce from 'immer';
import clearSelectNote from '../clearSelectNote';
import tab from '../../../store';

describe('clearSelectNote', () => {
    it('should clear the selected note', () => {
        const state = produce(tab, draft => {
            draft.selected_note = {
                p: '2gfd',
                b: '0n5h',
                c: '1fg6',
                l: '2',
            };
        });
        const result = clearSelectNote(state);
        expect(result.selected_note).toStrictEqual({
            p: 0, b: 0, c: 0, l: 0,
        });
    });
});
