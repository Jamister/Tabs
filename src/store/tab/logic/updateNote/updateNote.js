// Functions
import { returnKeyValue } from '../../../../functions/returnKeyValue';

export const updateNote = (state, action) => {
	const selected_note = state.selected_note || {};
	const { p, b, c, l } = selected_note;
	const note_id = `${p}-${b}-${c}-${l}`;
	const note_pre_value = ((state.notes || {})[note_id] || {}).value || '';
	const value = returnKeyValue(action.key_code, note_pre_value);
	const notes = {
		...state.notes,
		[note_id]: {
			value,
		},
	};
	const data_to_update = {
		notes,
	};
	// Add column in case its the last one
	const next_column_id = `${p}-${b}-${c + 1}`;
	const last_column = state.columns.by_id[next_column_id] === undefined;
	if (last_column) {
		const columns = {
			all_ids: [
				...state.columns.all_ids,
				next_column_id,
			],
			by_id: {
				...state.columns.by_id,
				[next_column_id]: {
					part_id: p,
					block_id: b,
					id: next_column_id,
				},
			},
		};
		data_to_update.columns = columns;
	}

	// TODO remove empty column at the end

	return {
		...state,
		...data_to_update,
	};
};
