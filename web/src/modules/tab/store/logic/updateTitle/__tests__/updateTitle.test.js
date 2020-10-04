import { getDateNow } from 'modules/shared/utils/dates';
import updateTitle from '../updateTitle';
import tab from '../../../store';

describe('updateTitle', () => {
    it('should update the title', () => {
        expect(tab.title).toBe('');
        const action = {
            title: 'Under the Bridge',
        };
        const result = updateTitle(tab, action);
        expect(result.title).toBe('Under the Bridge');
    });

    it('should update last change', () => {
        const action = {
            title: 'Under the Bridge',
        };
        const result = updateTitle(tab, action);
        const dateNow = getDateNow();
        expect(result.lastChange).toBe(dateNow);
    });
});
