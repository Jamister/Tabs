import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './BlockEnd.style';

// Components
import AddBlockButton from '../_buttons/AddBlockButton';
import RemoveBlockButton from '../_buttons/RemoveBlockButton';

// Functions
import { extract } from '../../functions/extractIds';

function BlockEnd({ block_full_id = '' }) {
	const columns = useSelector(store => store.tab.columns, shallowEqual);
	const by_id = columns.by_id || {};
	const part_id = extract.partId({
		full_id: block_full_id,
	});
	const block_id = extract.blockId({
		full_id: block_full_id,
		return_number: true,
	});
	const next_block_id = `${part_id}-${block_id + 1}-1`;
	const has_next_block = by_id[next_block_id] !== undefined;

	if (has_next_block) {
		return (
			<s.BlockEnd
				data-testid="blockend-render"
				data-test="blockend-render"
			/>
		);
	}

	return (
		<s.PartEnd data-testid="partend-render" data-test="blockend-render">
			<AddBlockButton part_id={part_id} />
			<RemoveBlockButton part_id={part_id} />
			<s.LayerOverLines />
		</s.PartEnd>
	);
}

BlockEnd.propTypes = {
	block_full_id: PropTypes.string.isRequired,
};

export default BlockEnd;
