import * as types from './types';

export const addBlock = (part_id) => ({
	type: types.ADD_BLOCK,
	part_id,
});

export const addPart = () => ({
	type: types.ADD_PART,
});

export const clearPressedKey = () => ({
	type: types.CLEAR_PRESSED_KEY,
});

export const clearSelectNote = () => ({
	type: types.CLEAR_SELECT_NOTE,
});

export const exportTabFormatTxt = () => ({
	type: types.EXPORT_TAB_TXT,
});

export const holdPressedKey = (key_code) => ({
	type: types.HOLD_PRESSED_KEY,
	key_code,
});

export const moveSelectedNote = (key_code) => ({
	type: types.MOVE_SELECTED_NOTE,
	key_code,
});

export const removeBlock = (part_id) => ({
	type: types.REMOVE_BLOCK,
	part_id,
});

export const selectNote = (note) => ({
	type: types.SELECT_NOTE,
	note,
});

export const updateNote = (key_code) => ({
	type: types.UPDATE_NOTE,
	key_code,
});

export const userChangedWritingType = (writing) => ({
	type: types.CHANGED_WRITING_TYPE,
	writing,
});

export const addChordToLyric = ({ part_id, line_id }) => ({
	type: types.ADD_CHORD_TO_LYRIC,
	part_id,
	line_id,
});
