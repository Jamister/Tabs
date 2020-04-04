import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Components
import Note from '../Note';
import ChordSelection from '../ChordSelection';

function Column({ part_id, block_id, column }) {
	const id = (column || {}).id || '';
	const column_id = Number(id.replace(`${part_id}-${block_id}-`, ''));
	const lines = useSelector(store => store
		.tab.lines, shallowEqual);
	const user_is_writing = useSelector(store => store
		.tab.user_is_writing, shallowEqual);

	if (user_is_writing === 'chords') {
		return (
			<div styleName="column" data-test="column-render">
				<ChordSelection
					data-test="notes-render"
					part_id={part_id}
					block_id={block_id}
					column_id={column_id}
				/>
				{(lines || []).map(l => (
					<Note
						key={l}
						data-test="notes-render"
						part_id={part_id}
						block_id={block_id}
						column_id={column_id}
						line_id={l}
					/>
				))}
			</div>
		);
	}

	return (
		<div styleName="column" data-test="column-render">
			{(lines || []).map(l => (
				<Note
					key={l}
					data-test="notes-render"
					part_id={part_id}
					block_id={block_id}
					column_id={column_id}
					line_id={l}
				/>
			))}
		</div>
	);
}

Column.propTypes = {
	part_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	block_id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	column: PropTypes.object.isRequired,
};

export default CSSModules(Column, styles, { allowMultiple: true });
