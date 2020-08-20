import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */

// CSS
import * as s from './LyricChords.style';

// Components
// import TuneOnPart from '../TuneOnPart';
// import Block from '../Block';

function LyricChord({ part_id, lyric_line }) {

    return (
        <s.LineWrapper>
            G
        </s.LineWrapper>
    );
}

LyricChord.propTypes = {
    lyric_line: PropTypes.shape({
        id: PropTypes.string.isRequired,
        lyric: PropTypes.string.isRequired,
    }).isRequired,
};

export default LyricChord;
