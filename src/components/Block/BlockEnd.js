import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

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
			<div styleName="block-end-2" />
		);
	}

	return (
		<div styleName="part-end" data-test="block-render">
			<AddBlockButton part_id={part_id} />
			<RemoveBlockButton part_id={part_id} />
			<div styleName="layer-over-lines" />
		</div>
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

export default CSSModules(BlockEnd, styles, { allowMultiple: true });
