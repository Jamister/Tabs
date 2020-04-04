import {
	ADD_BLOCK,
	ADD_PART,
	CLEAR_PRESSED_KEY,
	CLEAR_SELECT_NOTE,
	EXPORT_TAB_TXT,
	HOLD_PRESSED_KEY,
	MOVE_SELECTED_NOTE,
	REMOVE_BLOCK,
	SELECT_NOTE,
	UPDATE_NOTE,
	CHANGED_WRITING_TYPE,
} from './types';

export const addBlock = (part_id) => ({ type: ADD_BLOCK, part_id });
export const addPart = () => ({ type: ADD_PART });
export const clearPressedKey = () => ({ type: CLEAR_PRESSED_KEY });
export const clearSelectNote = () => ({ type: CLEAR_SELECT_NOTE });
export const exportTabFormatTxt = () => ({ type: EXPORT_TAB_TXT });
export const holdPressedKey = (key_code) => ({ type: HOLD_PRESSED_KEY, key_code });
export const moveSelectedNote = (key_code) => ({ type: MOVE_SELECTED_NOTE, key_code });
export const removeBlock = (part_id) => ({ type: REMOVE_BLOCK, part_id });
export const selectNote = (p, b, c, l) => ({ type: SELECT_NOTE, p, b, c, l });
export const updateNote = (key_code) => ({ type: UPDATE_NOTE, key_code });
export const userChangedWritingType = ({ writing }) => ({ type: CHANGED_WRITING_TYPE, writing });
