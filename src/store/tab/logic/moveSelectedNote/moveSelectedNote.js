// Functions
import { findLastColumn } from '../../../../functions/findLastColumn';

export const moveSelectedNote = (state, action) => {
	const key_code = (action || {}).key_code || 0;
	const selected_note = (state || {}).selected_note || {};
	const columns = (state || {}).columns || {};
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
	// right arrow
	case 39: {
		const column_id = `${p}-${b}-${c + 1}`;
		const next_location = columns.by_id[column_id] === undefined
			? { p, b: b + 1, c: 1, l }
			: { p, b, c: c + 1, l };

		// TODO check the end

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
