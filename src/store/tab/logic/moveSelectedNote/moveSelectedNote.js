// Functions
import { handleArrows } from '../../../../functions/handleArrows';

export const moveSelectedNote = (state, action) => {
	const selected_note = handleArrows(action.key_code, state);
	return {
		...state,
		selected_note,
	};
};
