import update from 'immutability-helper';
import tab from './store';
import {
	UPDATE_TAB,
	SELECT_NOTE,
	UPDATE_NOTE,
	MOVE_SELECTED_NOTE,
	ADD_BLOCK,
	REMOVE_BLOCK,
} from './types';

// Functions
import { returnKeyValue, handleArrows } from './utils';

const reducer = (state = tab, action) => {
	switch (action.type) {
	case UPDATE_TAB: {
		const all_fields = Object.keys(action.fields_n_values)
			.reduce((result, current) => ({
				...result,
				[current]: { $set: action.fields_n_values[current] },
			}), {});
		return update(state, all_fields);
	}

	case SELECT_NOTE: {
		const { p, b, c, l } = action;
		const selected_note = {
			p: Number(p),
			b: Number(b),
			c: Number(c),
			l: Number(l),
		};
		return update(state, {
			selected_note: { $set: selected_note },
		});
	}

	case UPDATE_NOTE: {
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
			notes: { $set: notes },
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
			data_to_update.columns = { $set: columns };
		}
		return update(state, data_to_update);
	}

	case MOVE_SELECTED_NOTE: {
		const selected_note = handleArrows(action.key_code, state);
		return update(state, {
			selected_note: { $set: selected_note },
		});
	}

	case ADD_BLOCK: {
		const { part_id } = action;
		let next_block_id = `${part_id}-${1}`;
		let block_id = 0;
		for (let i = 1; i <= 1000; i++) {
			if (state.blocks.by_id[`${part_id}-${i}`] === undefined) {
				next_block_id = `${part_id}-${i}`;
				block_id = i;
				break;
			}
		}
		const blocks = {
			all_ids: [
				...state.blocks.all_ids,
				next_block_id,
			],
			by_id: {
				...state.blocks.by_id,
				[next_block_id]: {
					part_id,
					id: next_block_id,
				},
			},
		};
		const columns_all_ids = [1, 2, 3, 4].map(column_id => (
			`${next_block_id}-${column_id}`
		));
		const all_ids = [
			...state.columns.all_ids,
			...columns_all_ids,
		].filter((el, i, a) => i === a.indexOf(el));
		const columns_by_id = [1, 2, 3, 4].reduce((result, column_id) => ({
			...result,
			[`${next_block_id}-${column_id}`]: {
				part_id,
				block_id,
				id: `${next_block_id}-${column_id}`,
			},
		}), {});
		const columns = {
			all_ids,
			by_id: {
				...state.columns.by_id,
				...columns_by_id,
			},
		};
		return update(state, {
			blocks: { $set: blocks },
			columns: { $set: columns },
		});
	}

	case REMOVE_BLOCK: {
		const { part_id } = action;
		let last_block_id = `${part_id}-${1}`;
		// let block_id = 0;
		for (let i = 1; i <= 1000; i++) {
			if (state.blocks.by_id[`${part_id}-${i}`] === undefined) {
				last_block_id = `${part_id}-${i - 1}`;
				// block_id = i - 1;
				break;
			}
		}
		const all_ids = state.blocks.all_ids
			.filter(id => id !== last_block_id);
		const by_id = { ...state.blocks.by_id };
		delete by_id[last_block_id];
		const blocks = {
			all_ids,
			by_id,
		};

		// TODO remove columns

		// TODO remove notes

		return update(state, {
			blocks: { $set: blocks },
			// columns: { $set: columns },
		});
	}

	default:
		return state;
	}
};

export default reducer;
