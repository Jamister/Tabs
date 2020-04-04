import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Actions
import { selectNote } from '../../store/tab/actions';

function ChordSelection({
	part_id,
	block_id,
	column_id,
}) {
	const dispatch = useDispatch();

	function handleNote() {
		dispatch(
			selectNote(
				part_id,
				block_id,
				column_id,
				1,
			),
		);
	}

	const note_id = `${part_id}-${block_id}-${column_id}-1`;
	const selected_note = useSelector(store => store.tab.selected_note, shallowEqual) || {};
	const { p, b, c, l } = selected_note;
	const selected_note_id = `${p}-${b}-${c}-${l}`;

	const note_class = note_id === selected_note_id
		? 'chord selected'
		: 'chord';

	return (
		<button
			type="button"
			aria-label="chord button"
			styleName={note_class}
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

export default CSSModules(ChordSelection, styles, { allowMultiple: true });
