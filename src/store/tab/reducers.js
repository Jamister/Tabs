import tab from './store';

// Use cases
import addBlock from './logic/addBlock';
import addPart from './logic/addPart';
import clearSelectNote from './logic/clearSelectNote';
import exportTabFormatTxt from './logic/exportTabFormatTxt';
import moveSelectedNote from './logic/moveSelectedNote';
import removeBlock from './logic/removeBlock';
import selectNote from './logic/selectNote';
import removeEmptyColumn from './logic/removeEmptyColumn';
import updateNote from './logic/updateNote';
import addColumn from './logic/addColumn';
import changedWritingType from './logic/changedWritingType';

const funcs = {
	ADD_BLOCK: addBlock,
	ADD_PART: addPart,
	CLEAR_SELECT_NOTE: clearSelectNote,
	EXPORT_TAB_TXT: exportTabFormatTxt,
	MOVE_SELECTED_NOTE: moveSelectedNote,
	REMOVE_BLOCK: removeBlock,
	SELECT_NOTE: selectNote,
	REMOVE_EMPTY_COLUMN: removeEmptyColumn,
	UPDATE_NOTE: updateNote,
	ADD_COLUMN: addColumn,
	CHANGED_WRITING_TYPE: changedWritingType,
};

const reducer = (state = tab, action) => {
	const new_state = funcs[action.type] !== undefined
		? funcs[action.type](state, action)
		: { ...state };
	return new_state;
};

export default reducer;
