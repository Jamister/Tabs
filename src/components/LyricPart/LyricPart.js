import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './LyricPart.style';

// Components
import LyricChords from '../LyricChords';
import LyricLine from '../LyricLine';

function LyricPart({ part_id }) {
	const lyric_lines = useSelector(store => store
		.tab.lyric_lines, shallowEqual);
	const by_id = lyric_lines.by_id || {};
	const all_ids = lyric_lines.all_ids || [];
	const all_part_lines = all_ids
		.filter(b => b.indexOf(`${part_id}-`) !== -1);

	return (
		<s.Lyric>
			{all_part_lines.map(line_id => (
				<React.Fragment key={line_id}>
					<LyricChords
						part_id={part_id}
						lyric_line={by_id[line_id]}
					/>
					<LyricLine
						part_id={part_id}
						lyric_line={by_id[line_id]}
					/>
				</React.Fragment>
			))}
		</s.Lyric>
	);
}

LyricPart.propTypes = {
	part_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default LyricPart;
