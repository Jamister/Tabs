import { mapKeysToActions } from '../mapKeysToActions';

test('mapKeysToActions should not crash', () => {
	expect(mapKeysToActions()).toStrictEqual({
		key_code: undefined,
		type: 'UPDATE_NOTE',
	});
});

test('mapKeysToActions return ESC keypress', () => {
	expect(mapKeysToActions(27)).toStrictEqual({
		type: 'CLEAR_SELECT_NOTE',
	});
});

test('mapKeysToActions return right arrow keypress', () => {
	expect(mapKeysToActions(39)).toStrictEqual({
		key_code: 39,
		type: 'MOVE_SELECTED_NOTE',
	});
});
