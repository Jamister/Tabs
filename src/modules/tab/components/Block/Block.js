import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// Components
import Column from '../Column';
import BlockEnd from './BlockEnd';

function Block({ full_block_id }) {
    const columns = useSelector(store => store.tab.columns, shallowEqual);
    const columns_in_this_block = (columns.all_ids || [])
        .filter(b => b.indexOf(`${full_block_id}-`) !== -1);

    return (
        <>
            {columns_in_this_block.map(full_column_id => (
                <Column
                    key={full_column_id}
                    full_column_id={full_column_id}
                />
            ))}
            <BlockEnd full_block_id={full_block_id} />
        </>
    );
}

Block.propTypes = {
    full_block_id: PropTypes.string.isRequired,
};

export default Block;
