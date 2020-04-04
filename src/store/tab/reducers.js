import tab from './store';

// Actions external logic
import { addBlock } from './logic/addBlock';
import { addPart } from './logic/addPart';
import { clearPressedKey } from './logic/clearPressedKey';
import { clearSelectNote } from './logic/clearSelectNote';
import { exportTabFormatTxt } from './logic/exportTabFormatTxt';
import { holdPressedKey } from './logic/holdPressedKey';
import { moveSelectedNote } from './logic/moveSelectedNote';
import { removeBlock } from './logic/removeBlock';
import { selectNote } from './logic/selectNote';
import { updateNote } from './logic/updateNote';
import { changedWritingType } from './logic/changedWritingType';

const funcs = {
	ADD_BLOCK: addBlock,
	ADD_PART: addPart,
	CLEAR_PRESSED_KEY: clearPressedKey,
	CLEAR_SELECT_NOTE: clearSelectNote,
	EXPORT_TAB_TXT: exportTabFormatTxt,
	HOLD_PRESSED_KEY: holdPressedKey,
	MOVE_SELECTED_NOTE: moveSelectedNote,
	REMOVE_BLOCK: removeBlock,
	SELECT_NOTE: selectNote,
	UPDATE_NOTE: updateNote,
	CHANGED_WRITING_TYPE: changedWritingType,
};

const reducer = (state = tab, action) => {
	const new_state = funcs[action.type] !== undefined
		? funcs[action.type](state, action)
		: { ...state };
	return new_state;
};

export default reducer;
