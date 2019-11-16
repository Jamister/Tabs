import tab from './store';

// Actions external logic
import { addBlock } from './logic/addBlock';
import { moveSelectedNote } from './logic/moveSelectedNote';
import { removeBlock } from './logic/removeBlock';
import { selectNote } from './logic/selectNote';
import { updateNote } from './logic/updateNote';

const funcs = {
	ADD_BLOCK: addBlock,
	MOVE_SELECTED_NOTE: moveSelectedNote,
	REMOVE_BLOCK: removeBlock,
	SELECT_NOTE: selectNote,
	UPDATE_NOTE: updateNote,
};

const reducer = (state = tab, action) => {
	const new_state = funcs[action.type] !== undefined
		? funcs[action.type](state, action)
		: { ...state };
	return new_state;
};

export default reducer;
