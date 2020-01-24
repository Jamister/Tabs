import {
	SELECT_NOTE,
	CLEAR_SELECT_NOTE,
	UPDATE_NOTE,
	MOVE_SELECTED_NOTE,
	ADD_BLOCK,
	REMOVE_BLOCK,
} from './types';

export const selectNote = (p, b, c, l) => ({ type: SELECT_NOTE, p, b, c, l });
export const clearSelectNote = () => ({ type: CLEAR_SELECT_NOTE });
export const updateNote = (key_code) => ({ type: UPDATE_NOTE, key_code });
export const moveSelectedNote = (key_code) => ({ type: MOVE_SELECTED_NOTE, key_code });
export const addBlock = (part_id) => ({ type: ADD_BLOCK, part_id });
export const removeBlock = (part_id) => ({ type: REMOVE_BLOCK, part_id });
