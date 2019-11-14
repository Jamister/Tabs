import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Actions
import { addBlock, removeBlock } from '../../store/tab/actions';

// Components
import Block from '../Block';

function Part({ part }) {
	const { id } = part || {};
	const blocks = useSelector(store => store.tab.blocks, shallowEqual);
	const blocks_list = blocks.all_ids
		.filter(b => b.indexOf(`${id}-`) !== -1);
	const dispatch = useDispatch();

	function addNewBlock() {
		dispatch(addBlock(id));
	}

	function removeLastBlock() {
		dispatch(removeBlock(id));
	}

	return (
		<div styleName="part" data-test="part-render">
			<div styleName="part-start" />
			<div styleName="background-lines">
				<div styleName="line-1" />
				<div styleName="line-2" />
				<div styleName="line-3" />
				<div styleName="line-4" />
				<div styleName="line-5" />
				<div styleName="line-6" />
			</div>
			{blocks_list.map(b => (
				<Block
					key={b}
					part_id={id}
					block={blocks.by_id[b]}
				/>
			))}
			<div styleName="part-end" />

			<button
				type="button"
				styleName="add-block-button"
				onClick={addNewBlock}
			>
				+ Block
			</button>

			<button
				type="button"
				styleName="remove-block-button"
				onClick={removeLastBlock}
			>
				- Block
			</button>

		</div>
	);
}

Part.propTypes = {
	part: PropTypes.object.isRequired,
};

export default CSSModules(Part, styles, { allowMultiple: true });
