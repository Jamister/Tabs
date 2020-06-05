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

// Functions
import { extract } from '../../functions/extractIds';

function Note({
	column_full_id = '',
	line_id = '',
}) {
	const dispatch = useDispatch();
	const note_id = `${column_full_id}-${line_id}`;
	const selected_note = useSelector(store => store.tab.selected_note, shallowEqual) || {};
	const { p, b, c, l } = selected_note;
	const selected_note_id = `${p}-${b}-${c}-${l}`;
	const selected = note_id === selected_note_id;
	const user_is_writing = useSelector(store => store
		.tab.user_is_writing, shallowEqual);

	const part_id = extract.partId({
		full_id: column_full_id,
	});
	const block_id = extract.blockId({
		full_id: column_full_id,
		return_number: true,
	});
	const column_id = extract.columnId({
		full_id: column_full_id,
		return_number: true,
	});

	function handleNote() {
		const action = selectNote({
			p: part_id,
			b: block_id,
			c: column_id,
			l: line_id,
		});
		dispatch(action);
	}

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
	column_full_id: PropTypes.string.isRequired,
	line_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default Note;
