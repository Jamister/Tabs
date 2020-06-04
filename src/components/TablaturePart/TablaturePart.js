import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Components
import TuneOnPart from '../TuneOnPart';
import Block from '../Block';

function TablaturePart({ part }) {
	const part_id = (part || {}).id;
	const blocks = useSelector(store => store.tab.blocks, shallowEqual);
	const blocks_in_this_part = (blocks.all_ids || [])
		.filter(b => b.indexOf(`${part_id}-`) !== -1);

	return (
		<div styleName="part-wrapper">
			<TuneOnPart />
			<div styleName="part">
				<div styleName="part-start" />
				{blocks_in_this_part.map(block_full_id => (
					<Block
						key={block_full_id}
						part_id={part_id}
						block={blocks.by_id[block_full_id]}
					/>
				))}
			</div>
		</div>
	);
}

TablaturePart.propTypes = {
	part: PropTypes.shape({
		id: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]).isRequired,
	}).isRequired,
};

export default CSSModules(TablaturePart, styles, { allowMultiple: true });
