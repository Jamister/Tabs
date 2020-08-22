import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './BlockEnd.style';

// Components
import AddBlockButton from '../_buttons/AddBlockButton';
import RemoveBlockButton from '../_buttons/RemoveBlockButton';

// Functions
import { extract } from '../../utils/extractIds';

function BlockEnd({ full_block_id }) {
    const blocks = useSelector(store => store.tab.blocks, shallowEqual);
    const part_id = extract.partId({
        full_id: full_block_id,
    });

    function isLastBlockInThisPart() {
        // TODO refactor
        const blocks_all_ids = blocks.all_ids || {};
        const blocks_in_this_part = (blocks_all_ids || [])
            .filter(b => b.indexOf(`${part_id}-`) !== -1);
        const [last_block_full_id] = blocks_in_this_part.slice(-1);
        const this_block_id = extract.blockId({
            full_id: full_block_id,
        });
        const last_block_id = extract.blockId({
            full_id: last_block_full_id,
        });
        const is_last_block = this_block_id === last_block_id;
        return is_last_block;
    }

    return isLastBlockInThisPart() ? (
        <s.PartEnd>
            <AddBlockButton part_id={part_id} />
            <RemoveBlockButton part_id={part_id} />
            <s.LayerOverLines />
        </s.PartEnd>
    ) : (
        <s.BlockEnd />
    );
}

BlockEnd.propTypes = {
    full_block_id: PropTypes.string.isRequired,
};

export default BlockEnd;