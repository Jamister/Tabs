import produce from 'immer';
import saveTabSuccess from '../saveTabSuccess';
import tab from '../../../store';

describe('saveTabSuccess', () => {
    it('should finish saving tab', () => {
        const state = produce(tab, draft => {
            draft.isSaving = true;
        });
        const result = saveTabSuccess(state);
        expect(result.isSaving).toBeFalsy();
    });
});
