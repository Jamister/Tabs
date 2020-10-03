import produce from 'immer';
import { getDateNow } from 'modules/shared/utils/dates';
import changeLineTuning from '../changeLineTuning';
import tab from '../../../store';

describe('changeLineTuning', () => {
    it('should change the note of the line 2', () => {
        const action = { note: 'A', line: '2' };
        const result = changeLineTuning(tab, action);
        expect(result.tuning[1]).toBe('A');
    });

    it('should change the note of the line 4', () => {
        const action = { note: 'G', line: '4' };
        const result = changeLineTuning(tab, action);
        expect(result.tuning[3]).toBe('G');
    });

    it('should set the default tuning if previous note undefined', () => {
        const state = produce(tab, draft => {
            draft.tuning = [];
        });
        const action = { note: 'G', line: '4' };
        const result = changeLineTuning(state, action);
        expect(result.tuning).toStrictEqual(['e', 'B', 'G', 'G', 'A', 'E']);
    });

    it('should set last change with date now', () => {
        const action = { note: 'G', line: '4' };
        const result = changeLineTuning(tab, action);
        const dateNow = getDateNow();
        expect(result.lastChange).toBe(dateNow);
    });
});
