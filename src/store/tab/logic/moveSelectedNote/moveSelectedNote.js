// Functions
import { findLastColumn } from '../../../../functions/findLastColumn';

const moveSelectedNote = (state, action) => {
	const key_code = (action || {}).key_code || 0;
	const selected_note = (state || {}).selected_note || {};
	const columns = (state || {}).columns || {};
	const blocks = (state || {}).blocks || {};
	const lines = (state || {}).lines || [];
	const { p, b, c, l } = selected_note;

	if (p === undefined) {
		return {
			...state,
			selected_note: { p: 1, b: 1, c: 1, l: 1 },
		};
	}

	let new_selected_note = {};

	switch (key_code) {
	// tab
	// right arrow
	case 9:
	case 39: {
		const column_full_id = `${p}-${b}-${c + 1}`;
		const next_column_exists = (columns.by_id || {})[column_full_id] !== undefined;
		const next_block_exists = (blocks.by_id || {})[`${p}-${b + 1}`] !== undefined;
		let block_id = next_column_exists
			? b
			: b + 1;
		let column_id = next_column_exists
			? c + 1
			: 1;

		if (!next_column_exists && !next_block_exists) {
			block_id = b;
			column_id = c;
		}

		const next_location = { p, b: block_id, c: column_id, l };
		new_selected_note = next_location;
		break;
	}
	// left arrow
	case 37: {
		let next_column = c - 1;
		let next_block = b;
		if (next_column === 0 && b === 1) {
			next_column = 1;
		}
		if (next_column === 0 && b > 1) {
			next_column = findLastColumn(columns, p, b - 1);
			next_block = b - 1;
		}
		const next_location = { p, b: next_block, c: next_column, l };
		new_selected_note = next_location;
		break;
	}
	// top arrow
	case 38: {
		const next_line = l === 1 ? 1 : l - 1;
		const next_location = { p, b, c, l: next_line };
		new_selected_note = next_location;
		break;
	}
	// down arrow
	case 40: {
		const lower_line = lines.reduce((res, cur) => (cur > res ? cur : res));
		const next_line = l === lower_line ? lower_line : l + 1;
		const next_location = { p, b, c, l: next_line };
		new_selected_note = next_location;
		break;
	}
	default:
		new_selected_note = { p, b, c, l };
	}

	return {
		...state,
		selected_note: new_selected_note,
	};
};

export default moveSelectedNote;
