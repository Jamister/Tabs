import { mapKeysToActions } from './mapKeysToActions';

test('should return default', () => {
	expect(mapKeysToActions()).toBe('');
});

