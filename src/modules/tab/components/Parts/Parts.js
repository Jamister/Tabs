import React from 'react';
import PropTypes from 'prop-types';

// Components
import TablaturePart from '../TablaturePart';
import LyricPart from '../LyricPart';

function Parts({
    part_id = '',
    part_type = '',
}) {
    if (part_type === 'lyric') {
        return (
            <LyricPart
                part_id={part_id}
            />
        );
    }

    return (
        <TablaturePart
            part_id={part_id}
        />
    );
}

Parts.propTypes = {
    part_id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    part_type: PropTypes.string.isRequired,
};

export default Parts;
