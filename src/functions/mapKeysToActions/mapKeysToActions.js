// Actions
import { moveSelectedNote, updateNote } from '../../store/tab/actions';

export const mapKeysToActions = (key_code) => {
	// arrows
	const arrows = (
		key_code >= 37
		&& key_code <= 40
	) || key_code === 9;
	if (arrows) {
		return moveSelectedNote(key_code);
	}

	// actions
	// if (key_code === 65) {
	// 	return moveSelectedNote(key_code);
	// }

	// default
	return updateNote(key_code);
};
