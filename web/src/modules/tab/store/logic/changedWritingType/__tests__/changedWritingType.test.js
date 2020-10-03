import produce from 'immer';
import changedWritingType from '../changedWritingType';
import tab from '../../../store';

describe('changedWritingType', () => {
    it('should change the writing to chords', () => {
        const action = { writing: 'chords' };
        const result = changedWritingType(tab, action);
        expect(result.user_is_writing).toBe('chords');
    });

    it('should change the writing to notes', () => {
        const state = produce(tab, draft => {
            draft.user_is_writing = 'chords';
        });
        const action = { writing: 'notes' };
        const result = changedWritingType(state, action);
        expect(result.user_is_writing).toBe('notes');
    });
});
