import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';
import * as s from './TablaturePart.style';

// Components
import TuneOnPart from '../TuneOnPart';
import Block from '../Block';

function TablaturePart({ part_id }) {
    const blocks = useSelector(store => store.tab.blocks, shallowEqual);
    const blocks_in_this_part = (blocks.allIds || [])
        .filter(b => b.indexOf(`${part_id}-`) !== -1);

    return (
        <s.PartWrapper>
            <TuneOnPart />
            <s.Part>
                <s.PartStart />
                {blocks_in_this_part.map(full_block_id => (
                    <Block
                        key={full_block_id}
                        full_block_id={full_block_id}
                    />
                ))}
            </s.Part>
        </s.PartWrapper>
    );
}

TablaturePart.propTypes = {
    part_id: PropTypes.string.isRequired,
};

export default TablaturePart;
