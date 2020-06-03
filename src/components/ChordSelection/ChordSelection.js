import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import * as s from './ChordSelection.style';

// Actions
import { selectNote } from '../../store/tab/actions';

function ChordSelection({
	part_id,
	block_id,
	column_id,
}) {
	const dispatch = useDispatch();
	const note_id = `${part_id}-${block_id}-${column_id}-1`;
	const selected_note = useSelector(store => store.tab.selected_note, shallowEqual) || {};
	const { p, b, c, l } = selected_note;
	const selected_note_id = `${p}-${b}-${c}-${l}`;
	const selected = note_id === selected_note_id;

	function handleNote() {
		const action = selectNote({
			p: part_id,
			b: block_id,
			c: column_id,
			l: 1,
		});
		dispatch(action);
	}

	return (
		<s.Chord
			type="button"
			aria-label="chord button"
			selected={selected}
			onClick={handleNote}
		/>
	);
}

ChordSelection.propTypes = {
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
};

export default ChordSelection;
