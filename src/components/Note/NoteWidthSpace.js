import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

function NoteWidthSpace({ note_id }) {
	const note = useSelector(store => store.tab.notes[note_id], shallowEqual) || {};
	const note_value = note.value || '';
	const note_size = note_value.length <= 8
		? note_value.length
		: 8;
	const space_class = `note-width-space s${note_size}`;

	if (note_value !== '') {
		return <div styleName={space_class} />;
	}

	return null;
}

NoteWidthSpace.propTypes = {
	note_id: PropTypes.string.isRequired,
};

export default CSSModules(NoteWidthSpace, styles, { allowMultiple: true });
