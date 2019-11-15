import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

function NoteValue({ note_id }) {
	const note = useSelector(store => store.tab.notes[note_id], shallowEqual) || {};
	const note_value = note.value || '';

	if (note_value !== '') {
		return <span>{note_value}</span>;
	}

	return null;
}

NoteValue.propTypes = {
	note_id: PropTypes.string.isRequired,
};

export default CSSModules(NoteValue, styles, { allowMultiple: true });
