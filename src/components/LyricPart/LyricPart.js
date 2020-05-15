import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './LyricPart.style';

/* eslint-disable */
// Components
import LyricLine from '../LyricLine';
import Block from '../Block';

function LyricPart({ part }) {
	const { id } = part || {};
	const blocks = useSelector(store => store.tab.blocks, shallowEqual);
	const all_ids = blocks.all_ids || [];
	const blocks_list = all_ids
		.filter(b => b.indexOf(`${id}-`) !== -1);

	return (
		<s.Lyric>
			<LyricLine />
		</s.Lyric>
	);
}

LyricPart.propTypes = {
	part: PropTypes.shape({
		id: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]).isRequired,
	}).isRequired,
};

export default LyricPart;
