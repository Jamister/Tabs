import React from 'react';
import PropTypes from 'prop-types';

// Components
import TablaturePart from '../TablaturePart';
import LyricPart from '../LyricPart';

function Parts({ part }) {
	const { type } = part || {};

	if (type === 'lyric') {
		return <LyricPart part={part} />;
	}

	return <TablaturePart part={part} />;
}

Parts.propTypes = {
	part: PropTypes.shape({
		type: PropTypes.string.isRequired,
	}).isRequired,
};

export default Parts;
