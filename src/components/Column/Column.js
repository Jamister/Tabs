import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './Column.style';

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
			<s.Column data-test="column-render">
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
			</s.Column>
		);
	}

	return (
		<s.Column data-test="column-render">
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
		</s.Column>
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
	column: PropTypes.shape({
		id: PropTypes.string,
	}).isRequired,
};

export default Column;
