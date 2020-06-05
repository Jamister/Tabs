import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// Components
import Column from '../Column';
import BlockEnd from './BlockEnd';

function Block({ block_full_id = '' }) {
	const columns = useSelector(store => store.tab.columns, shallowEqual);
	const columns_in_this_block = (columns.all_ids || [])
		.filter(b => b.indexOf(`${block_full_id}-`) !== -1);

	return (
		<>
			{columns_in_this_block.map(column_full_id => (
				<Column
					key={column_full_id}
					column_full_id={column_full_id}
					data-test="columns-render"
				/>
			))}
			<BlockEnd
				block_full_id={block_full_id}
				data-test="block-render"
			/>
		</>
	);
}

Block.propTypes = {
	block_full_id: PropTypes.string.isRequired,
};

export default Block;
