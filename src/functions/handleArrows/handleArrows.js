import { findLastColumn } from '../findLastColumn';

export const handleArrows = (key_code, tab) => {
	const { selected_note, columns, lines } = tab;
	const { p, b, c, l } = selected_note;

	switch (key_code) {
	// right arrow
	case 39: {
		const column_id = `${p}-${b}-${c + 1}`;
		const next_location = columns.by_id[column_id] === undefined
			? { p, b: b + 1, c: 1, l }
			: { p, b, c: c + 1, l };

		// TODO check the end

		return next_location;
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
		return next_location;
	}
	// top arrow
	case 38: {
		const next_line = l === 1 ? 1 : l - 1;
		const next_location = { p, b, c, l: next_line };
		return next_location;
	}
	// down arrow
	case 40: {
		const lower_line = lines.reduce((res, cur) => (cur > res ? cur : res));
		const next_line = l === lower_line ? lower_line : l + 1;
		const next_location = { p, b, c, l: next_line };
		return next_location;
	}
	default:
		return { p, b, c, l };
	}
};
