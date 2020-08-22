import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// Css
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Components
import TuneOnPart from '../TuneOnPart';
import Block from '../Block';

function TablaturePart({ part_id }) {
    const blocks = useSelector(store => store.tab.blocks, shallowEqual);
    const blocks_in_this_part = (blocks.all_ids || [])
        .filter(b => b.indexOf(`${part_id}-`) !== -1);

    return (
        <div styleName="part-wrapper">
            <TuneOnPart />
            <div styleName="part">
                <div styleName="part-start" />
                {blocks_in_this_part.map(full_block_id => (
                    <Block
                        key={full_block_id}
                        full_block_id={full_block_id}
                    />
                ))}
            </div>
        </div>
    );
}

TablaturePart.propTypes = {
    part_id: PropTypes.string.isRequired,
};

export default CSSModules(TablaturePart, styles, { allowMultiple: true });
