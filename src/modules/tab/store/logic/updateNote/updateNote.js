// Functions
import { returnKeyValue } from 'modules/tab/utils/returnKeyValue';
import { returnChord } from 'modules/tab/utils/returnChord';

const updateNote = (state = {}, action = {}) => {
    const instrument = state.instrument || 'guitar';
    const lines = state.lines || [];
    const selected_note = state.selected_note || {};
    const { p, b, c, l } = selected_note;
    const new_state_to_return = {};

    function returnDefaultState() {
        return { ...state };
    }

    function returnUpdatedState() {
        return {
            ...state,
            ...new_state_to_return,
        };
    }

    function fillNotes(note_id, note_new_value) {
        const notes = {
            ...state.notes,
            [note_id]: {
                value: note_new_value,
            },
        };
        new_state_to_return.notes = notes;
        return returnUpdatedState();
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
        return returnUpdatedState();
    }

    function findChord() {
        const chord = returnChord(action.key_code, instrument);
        const no_chord_found = chord === null;
        return no_chord_found
            ? returnUpdatedState()
            : buildChord(chord);
    }

    function checkIfIsChord() {
        const { user_is_writing } = state;
        const writing_chords = user_is_writing === 'chords';
        return writing_chords
            ? findChord()
            : buildSingleNote();
    }

    function checkBlank() {
        const no_part_found = p === undefined;
        return no_part_found
            ? returnDefaultState()
            : checkIfIsChord();
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
