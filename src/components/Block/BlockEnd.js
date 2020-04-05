import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './BlockEnd.style';

// Components
import AddBlockButton from '../_buttons/AddBlockButton';
import RemoveBlockButton from '../_buttons/RemoveBlockButton';

function BlockEnd({ part_id, block_id }) {
	const columns = useSelector(store => store.tab.columns, shallowEqual);
	const by_id = columns.by_id || {};
	const next_block_id = `${part_id}-${block_id + 1}-1`;
	const has_next_block = (by_id[next_block_id] || {}).id !== undefined;

	if (has_next_block) {
		return (
			<s.BlockEnd data-test="blockend-render" />
		);
	}

	return (
		<s.PartEnd data-test="blockend-render">
			<AddBlockButton part_id={part_id} />
			<RemoveBlockButton part_id={part_id} />
			<s.LayerOverLines />
		</s.PartEnd>
	);
}

BlockEnd.propTypes = {
	part_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	block_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default BlockEnd;
