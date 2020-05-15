import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './LyricPart.style';

// Components
import LyricLine from '../LyricLine';

function LyricPart({ part }) {
	const { id } = part || {};
	const lyric_lines = useSelector(store => store
		.tab.lyric_lines, shallowEqual);
	const by_id = lyric_lines.by_id || {};
	const all_ids = lyric_lines.all_ids || [];
	const all_part_lines = all_ids
		.filter(b => b.indexOf(`${id}-`) !== -1);

	return (
		<s.Lyric>
			{all_part_lines.map(line_id => (
				<LyricLine
					key={line_id}
					part_id={id}
					lyric_line={by_id[line_id]}
				/>
			))}
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
