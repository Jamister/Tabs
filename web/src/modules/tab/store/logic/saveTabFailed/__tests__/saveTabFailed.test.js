import produce from 'immer';
import saveTabFailed from '../saveTabFailed';
import tab from '../../../store';

describe('saveTabFailed', () => {
    it('should show error trying to save tab', () => {
        const state = produce(tab, draft => {
            draft.isSaving = true;
        });
        const action = {
            error: {
                message: 'This is a test error',
            },
        };
        const result = saveTabFailed(state, action);
        expect(result.isSaving).toBeFalsy();
        expect(result.savingError).toBe('This is a test error');
    });
});
