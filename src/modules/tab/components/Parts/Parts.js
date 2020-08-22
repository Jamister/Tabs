import React from 'react';
import PropTypes from 'prop-types';

// Components
import TablaturePart from '../TablaturePart';
import LyricPart from '../LyricPart';

function Parts({ part_id, part }) {
    const isTablature = part?.type === 'tablature';

    return isTablature
        ? <TablaturePart part_id={part_id} />
        : <LyricPart part_id={part_id} />;
}

Parts.propTypes = {
    part_id: PropTypes.string.isRequired,
    part: PropTypes.shape({
        type: PropTypes.string,
    }).isRequired,
};

export default Parts;
