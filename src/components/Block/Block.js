import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// Components
import Column from '../Column';
import BlockEnd from './BlockEnd';

function Block({ part_id, block }) {
	const block_full_id = (block || {}).id || '';
	const block_id = Number(block_full_id.replace(`${part_id}-`, ''));
	const columns = useSelector(store => store.tab.columns, shallowEqual);
	const columns_in_this_block = (columns.all_ids || [])
		.filter(b => b.indexOf(`${part_id}-${block_id}-`) !== -1);

	return (
		<>
			{columns_in_this_block.map(column_full_id => (
				<Column
					key={column_full_id}
					data-test="columns-render"
					part_id={part_id}
					block_id={block_id}
					column={columns.by_id[column_full_id]}
				/>
			))}
			<BlockEnd
				part_id={part_id}
				block_id={block_id}
				data-test="block-render"
			/>
		</>
	);
}

Block.propTypes = {
	part_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	block: PropTypes.shape({
		id: PropTypes.string,
	}).isRequired,
};

export default Block;
