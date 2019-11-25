import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Components
import Column from '../Column';

function Block({ part_id, block }) {
	const id = (block || {}).id || '';
	const block_id = Number(id.replace(`${part_id}-`, ''));
	const columns = useSelector(store => store.tab.columns, shallowEqual);
	const all_ids = columns.all_ids || [];
	const columns_list = all_ids
		.filter(b => b.indexOf(`${part_id}-${block_id}-`) !== -1);

	// Need to check the end of the block
	const by_id = columns.by_id || {};
	const next_block_id = `${part_id}-${id + 1}-1`;
	const has_next_block = by_id[next_block_id].id !== undefined;
	const block_end_elem = has_next_block
		? <div styleName="block-end-2" />
		: <div styleName="part-end" />;

	return (
		<>
			{columns_list.map(c => (
				<Column
					key={c}
					data-test="columns-render"
					part_id={part_id}
					block_id={block_id}
					column={columns.by_id[c]}
				/>
			))}
			{block_end_elem}
		</>
	);
}

Block.propTypes = {
	part_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	block: PropTypes.object.isRequired,
};

export default CSSModules(Block, styles, { allowMultiple: true });
