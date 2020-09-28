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
    const byId = lyric_lines.byId || {};
    const allIds = lyric_lines.allIds || [];
    const all_part_lines = allIds
        .filter(b => b.indexOf(`${part_id}-`) !== -1);

    return (
        <s.Lyric>
            {all_part_lines.map(line_id => (
                <React.Fragment key={line_id}>
                    <LyricChords
                        part_id={part_id}
                        lyric_line={byId[line_id]}
                    />
                    <LyricLine
                        part_id={part_id}
                        lyric_line={byId[line_id]}
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
