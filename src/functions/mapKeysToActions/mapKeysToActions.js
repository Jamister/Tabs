// Actions
import { moveSelectedNote, updateNote } from '../../store/tab/actions';

export const mapKeysToActions = (key_code) => {
	const arrows = (
		key_code >= 37
		&& key_code <= 40
	) || key_code === 9;
	if (arrows) {
		return moveSelectedNote(key_code);
	}

	return updateNote(key_code);
};
