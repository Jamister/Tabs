import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shallowequal from 'shallowequal';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

class Note extends Component {
	constructor() {
		super();
		this.selectLocationLocal = this.selectLocationLocal.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		if (!shallowequal(this.props, nextProps)) return true;
		return false;
	}

	selectLocationLocal() {
		const { this_note_location, selectLocation } = this.props;
		const { p, b, c, l } = this_note_location;
		const note_location = { ...this_note_location, string: `${p}-${b}-${c}-${l}` };
		selectLocation(note_location);
	}

	render() {
		const { note_value, is_selected } = this.props;
		// const { p, b, c, l } = note_location;
		// const { p: ps, b: bs, c: cs, l: ls } = selected_note_location;
		// const note_location_str = `${p}-${b}-${c}-${l}`;
		// const selected_note_location_str = `${ps}-${bs}-${cs}-${ls}`;
		const note_class = is_selected ? 'note selected' : 'note';

		return (
			<button
				styleName={note_class}
				onClick={this.selectLocationLocal}>
				{note_value !== '' && <span>{note_value}</span>}
			</button>
		);
	}
}

Note.propTypes = {
	this_note_location: PropTypes.object.isRequired,
	note_value: PropTypes.string.isRequired,
	is_selected: PropTypes.bool.isRequired,
	selectLocation: PropTypes.func.isRequired,
};

export default CSSModules(Note, styles, { allowMultiple: true });
