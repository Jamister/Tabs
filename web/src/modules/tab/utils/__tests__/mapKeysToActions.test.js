import mapKeysToActions from '../mapKeysToActions';

describe('mapKeysToActions', () => {
    it('should update note', () => {
        expect(mapKeysToActions(null, '2')).toStrictEqual({
            key: '2',
            type: 'START_UPDATING_NOTE',
        });
    });

    it('should return + keypress', () => {
        expect(mapKeysToActions(null, '+')).toStrictEqual({
            type: 'ADD_COLUMN',
        });
    });

    it('should return ESC keypress', () => {
        expect(mapKeysToActions(null, 'Escape')).toStrictEqual({
            type: 'CLEAR_SELECTED_NOTE',
        });
    });

    it('should return right arrow keypress', () => {
        expect(mapKeysToActions(null, 'ArrowUp')).toStrictEqual({
            event: null,
            key: 'ArrowUp',
            type: 'MOVE_SELECTED_NOTE',
        });
    });
});
