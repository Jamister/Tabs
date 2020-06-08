// Actions
import {
	moveSelectedNote,
	startUpdatingNote,
	clearSelectNote,
	holdPressedKey,
} from '../../store/tab/actions';

export const mapKeysToActions = (key_code) => {
	// arrows
	const arrows = (
		key_code >= 37
		&& key_code <= 40
	) || key_code === 9;
	if (arrows) {
		return moveSelectedNote(key_code);
	}

	// esc
	if (key_code === 27) {
		return clearSelectNote();
	}

	// shift
	if (key_code === 16) {
		return holdPressedKey(key_code);
	}

	// default
	return startUpdatingNote(key_code);
};
