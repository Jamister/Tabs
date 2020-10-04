import { getDateNow } from 'modules/shared/utils/dates';
import updateArtist from '../updateArtist';
import tab from '../../../store';

describe('updateArtist', () => {
    it('should update the artist name', () => {
        expect(tab.artist).toBe('');
        const action = {
            artist: 'Foo Fighters',
        };
        const result = updateArtist(tab, action);
        expect(result.artist).toBe('Foo Fighters');
    });

    it('should update last change', () => {
        const action = {
            artist: 'Foo Fighters',
        };
        const result = updateArtist(tab, action);
        const dateNow = getDateNow();
        expect(result.lastChange).toBe(dateNow);
    });
});
