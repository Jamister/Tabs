// Functions
import { returnKeyValue } from '../../../../functions/returnKeyValue';

function addColumnIfLastOne(state) {
	const columns = state.columns || {};
	const all_ids = columns.all_ids || [];
	const by_id = columns.by_id || {};
	const selected_note = state.selected_note || {};
	const { p, b, c } = selected_note;
	const next_column_id = `${p}-${b}-${c + 1}`;
	const last_column = by_id[next_column_id] === undefined;
	if (last_column) {
		const new_columns = {
			all_ids: [
				...all_ids,
				next_column_id,
			],
			by_id: {
				...by_id,
				[next_column_id]: {
					part_id: p,
					block_id: b,
					id: next_column_id,
				},
			},
		};
		return new_columns;
	}

	return { ...columns };
}

// function removeColumnsIfEmpty(state) {
// }

export const updateNote = (_state, _action) => {
	const state = _state || {};
	const action = _action || {};
	const selected_note = state.selected_note || {};
	const { p, b, c, l } = selected_note;

	if (p === undefined) {
		return { ...state };
	}

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

	// add column in case its the last one
	const columns = addColumnIfLastOne(state);
	data_to_update.columns = columns;

	// TODO remove empty column at the end

	return {
		...state,
		...data_to_update,
	};
};
