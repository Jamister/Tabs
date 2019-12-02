import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Components
import Block from '../Block';
import AddBlockButton from '../_buttons/AddBlockButton';
import RemoveBlockButton from '../_buttons/RemoveBlockButton';

function Part({ part }) {
	const { id } = part || {};
	const blocks = useSelector(store => store.tab.blocks, shallowEqual);
	const all_ids = blocks.all_ids || [];
	const blocks_list = all_ids
		.filter(b => b.indexOf(`${id}-`) !== -1);

	return (
		<div styleName="part" data-test="part-render">
			<div styleName="part-start" />
			{blocks_list.map(b => (
				<Block
					key={b}
					data-test="blocks-render"
					part_id={id}
					block={blocks.by_id[b]}
				/>
			))}

			<AddBlockButton part_id={id} />
			<RemoveBlockButton part_id={id} />
		</div>
	);
}

Part.propTypes = {
	part: PropTypes.object.isRequired,
};

export default CSSModules(Part, styles, { allowMultiple: true });
