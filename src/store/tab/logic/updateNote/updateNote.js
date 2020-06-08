// Functions
import { returnKeyValue } from '../../../../functions/returnKeyValue';
import { returnChord } from '../../../../functions/returnChord';

const updateNote = (state = {}, action = {}) => {
	const instrument = state.instrument || 'guitar';
	const lines = state.lines || [];
	const columns = state.columns || {};
	const selected_note = state.selected_note || {};
	const { p, b, c, l } = selected_note;
	const new_state_to_return = {};

	function returnUpdatedState() {
		return {
			...state,
			...new_state_to_return,
		};
	}

	function addColumn() {
		const all_ids = columns.all_ids || [];
		const by_id = columns.by_id || {};
		const next_column_id = `${p}-${b}-${c + 1}`;
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

		new_state_to_return.columns = new_columns;
		return returnUpdatedState();
	}

	function checkIfIsLastColumn() {
		const by_id = columns.by_id || {};
		const next_column_id = `${p}-${b}-${c + 1}`;
		const last_column = by_id[next_column_id] === undefined;

		if (last_column) {
			return addColumn();
		}

		return returnUpdatedState();
	}

	function fillNotes(note_id, note_new_value) {
		const notes = {
			...state.notes,
			[note_id]: {
				value: note_new_value,
			},
		};
		new_state_to_return.notes = notes;
		return checkIfIsLastColumn();
	}

	function buildSingleNote() {
		const note_id = `${p}-${b}-${c}-${l}`;
		const note_previous_value = ((state.notes || {})[note_id] || {}).value || '';
		const note_new_value = returnKeyValue(action.key_code, note_previous_value);
		return fillNotes(note_id, note_new_value);
	}

	function buildChord(chord) {
		const notes = { ...state.notes };
		lines.forEach(line => {
			const note_full_id = `${p}-${b}-${c}-${line}`;
			const note_value = `${chord[line - 1]}`;
			notes[note_full_id] = {
				value: note_value,
			};
		});
		new_state_to_return.notes = notes;
		return checkIfIsLastColumn();
	}

	function findChord() {
		const chord = returnChord(action.key_code, instrument);
		if (chord === null) {
			return returnUpdatedState();
		}
		return buildChord(chord);
	}

	function checkIfIsChord() {
		const { user_is_writing } = state;
		if (user_is_writing === 'chords') {
			return findChord();
		}
		return buildSingleNote();
	}

	function checkBlank() {
		if (p === undefined) {
			return { ...state };
		}
		return checkIfIsChord();
	}

	return checkBlank();
};


// function deleteColumnIfEmpty(state, columns, value, key_code) {
// 	if (value !== '') {
// 		return { ...columns };
// 	}

// 	const all_ids = columns.all_ids || [];
// 	const by_id = columns.by_id || {};
// 	const selected_note = state.selected_note || {};
// 	const { p, b, c } = selected_note;
// 	const lines = state.lines || [];

// 	const notes_on_column = lines.reduce((res, cur) => {
// 		const note_id = `${p}-${b}-${c}-${cur}`;
// 		const note_value = ((state.notes || {})[note_id] || {}).value || '';
// 		if (note_value !== '') {
// 			return note_value;
// 		}

// 		return res;
// 	}, '');

// 	if (notes_on_column === '' && key_code === 46) {
// 		const column_id = `${p}-${b}-${c + 1}`;
// 		const _all_ids = all_ids.filter(x => x !== column_id);
// 		const _by_id = { ...by_id };
// 		delete _by_id[column_id];
// 		const new_columns = {
// 			all_ids: _all_ids,
// 			by_id: _by_id,
// 		};
// 		return new_columns;
// 	}

// 	return { ...columns };
// }

export default updateNote;
