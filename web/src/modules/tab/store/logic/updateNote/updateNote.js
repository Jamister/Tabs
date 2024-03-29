/* eslint-disable no-param-reassign */
import produce from 'immer';
import returnKeyValue from 'modules/tab/utils/returnKeyValue';
import returnChord from 'modules/tab/utils/returnChord';
import { getDateNow } from 'modules/shared/utils/dates';

const updateNote = produce((draft, action) => {
    const instrument = draft.instrument || 'guitar';
    const lines = draft.lines || [];
    const selected_note = draft.selected_note || {};
    const { p, b, c, l } = selected_note;

    function finish() {
        return draft;
    }

    function setLastChange() {
        draft.lastChange = getDateNow();
        return finish();
    }

    function fillNotes(note_id, note_new_value) {
        const notes = {
            ...draft.notes,
            [note_id]: {
                value: note_new_value,
            },
        };
        draft.notes = notes;
        return setLastChange();
    }

    function buildSingleNote() {
        const note_id = `${p}-${b}-${c}-${l}`;
        const note_previous_value = ((draft.notes || {})[note_id] || {}).value || '';
        const note_new_value = returnKeyValue(action.key, note_previous_value);
        return fillNotes(note_id, note_new_value);
    }

    function buildChord(chord) {
        const notes = { ...draft.notes };
        lines.forEach(line => {
            const note_full_id = `${p}-${b}-${c}-${line}`;
            const note_value = `${chord[line - 1]}`;
            notes[note_full_id] = {
                value: note_value,
            };
        });
        draft.notes = notes;
        return setLastChange();
    }

    function clearChord() {
        const chord = lines.map(() => '');
        return buildChord(chord);
    }

    function checkBackspaceOnChords() {
        const isDelete = action.key === 'Delete';
        const isBackspace = action.key === 'Backspace';
        const clearKeyWasPressed = isDelete || isBackspace;
        return clearKeyWasPressed
            ? clearChord()
            : finish();
    }

    function findChord() {
        const chord = returnChord(action.key, instrument);
        const no_chord_found = chord === null;
        return no_chord_found
            ? checkBackspaceOnChords()
            : buildChord(chord);
    }

    function checkIfIsChord() {
        const { user_is_writing } = draft;
        const writing_chords = user_is_writing === 'chords';
        return writing_chords
            ? findChord()
            : buildSingleNote();
    }

    function checkBlank() {
        const no_part_found = p === undefined;
        return no_part_found
            ? finish()
            : checkIfIsChord();
    }

    return checkBlank();
});

export default updateNote;
