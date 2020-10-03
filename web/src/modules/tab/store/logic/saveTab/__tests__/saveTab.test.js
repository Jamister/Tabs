import produce from 'immer';
import saveTab from '../saveTab';
import tab from '../../../store';

describe('saveTab', () => {
    it('should start saving tab', () => {
        const state = produce(tab, draft => {
            draft.lastChange = 765456;
            draft.isSaving = false;
            draft.savingError = 'Error';
        });
        const result = saveTab(state);
        expect(result.lastChange).toBe(0);
        expect(result.isSaving).toBeTruthy();
        expect(result.savingError).toBeNull();
    });
});
