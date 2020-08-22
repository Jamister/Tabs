import React from 'react';
import PropTypes from 'prop-types';

// CSS
import { Input } from 'antd';
import * as s from './LyricLine.style';

// Components
// import TuneOnPart from '../TuneOnPart';
// import Block from '../Block';
/* eslint-disable */
function LyricLine({ part_id, lyric_line }) {
    return (
        <s.LineWrapper>
            <Input value={lyric_line.lyric} />
        </s.LineWrapper>
    );
}

LyricLine.propTypes = {
    lyric_line: PropTypes.shape({
        id: PropTypes.string.isRequired,
        lyric: PropTypes.string.isRequired,
    }).isRequired,
};

export default LyricLine;
