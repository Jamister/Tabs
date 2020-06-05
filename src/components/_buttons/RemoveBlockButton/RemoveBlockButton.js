import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Actions
import { removeBlock } from '../../../store/tab/actions';

function RemoveBlockButton({ part_id }) {
	const dispatch = useDispatch();

	function removeLastBlock() {
		dispatch(removeBlock(part_id));
	}

	return (
		<button
			type="button"
			styleName="remove-block-button"
			onClick={removeLastBlock}
		>
			-
		</button>
	);
}

RemoveBlockButton.propTypes = {
	part_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
};

export default CSSModules(RemoveBlockButton, styles, { allowMultiple: true });
