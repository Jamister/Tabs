import { mapKeysToActions } from './mapKeysToActions';

test('mapKeysToActions should not crash', () => {
	expect(mapKeysToActions()).toBe({
		key_code: undefined,
		type: 'UPDATE_NOTE',
	});
});
