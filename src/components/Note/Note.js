import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import * as s from './Note.style';

// Actions
import { selectNote } from '../../store/tab/actions';

// Components
import NoteValue from './NoteValue';
import NoteWidthSpace from './NoteWidthSpace';

function Note({
	part_id,
	block_id,
	column_id,
	line_id,
}) {
	const dispatch = useDispatch();

	function handleNote() {
		dispatch(
			selectNote(
				part_id,
				block_id,
				column_id,
				line_id,
			),
		);
	}

	const note_id = `${part_id}-${block_id}-${column_id}-${line_id}`;
	const selected_note = useSelector(store => store.tab.selected_note, shallowEqual) || {};
	const { p, b, c, l } = selected_note;
	const selected_note_id = `${p}-${b}-${c}-${l}`;
	const selected = note_id === selected_note_id;
	const user_is_writing = useSelector(store => store
		.tab.user_is_writing, shallowEqual);

	if (user_is_writing === 'chords') {
		return (
			<>
				<s.Note line={line_id}>
					<NoteValue note_id={note_id} />
				</s.Note>
				<NoteWidthSpace note_id={note_id} />
			</>
		);
	}

	return (
		<>
			<s.Note
				type="button"
				line={line_id}
				selected={selected}
				onClick={handleNote}
			>
				<NoteValue note_id={note_id} />
			</s.Note>
			<NoteWidthSpace note_id={note_id} />
		</>
	);
}

Note.propTypes = {
	part_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	block_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	column_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	line_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default Note;
