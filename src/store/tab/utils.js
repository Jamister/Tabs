export const returnKeyValue = (key_code, pre_value) => {
	switch (key_code) {
	// 0
	case 48: case 96: return `${pre_value}0`;
	// 1
	case 49: case 97: return `${pre_value}1`;
	// 2
	case 50: case 98: return `${pre_value}2`;
	// 3
	case 51: case 99: return `${pre_value}3`;
	// 4
	case 52: case 100: return `${pre_value}4`;
	// 5
	case 53: case 101: return `${pre_value}5`;
	// 6
	case 54: case 102: return `${pre_value}6`;
	// 7
	case 55: case 103: return `${pre_value}7`;
	// 8
	case 56: case 104: return `${pre_value}8`;
	// 9
	case 57: case 105: return `${pre_value}9`;
	// s
	case 83: return `${pre_value}s`;

	// backspace
	case 8: return pre_value.slice(0, -1);
	// del
	case 46: return '';

	// arrows
	case 37: case 38: case 39: case 40: return 'arrows';

	// default
	default: return pre_value;
	}
};

const findLastColumnFromPreviousBlock = (columns, part_id, block_id) => {
	const { by_id } = columns;
	for (let i = 1; i <= 1000; i++) {
		if (by_id[`${part_id}-${block_id}-${i}`] === undefined) {
			return i - 1;
		}
	}
	return 1;
};

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
			next_column = findLastColumnFromPreviousBlock(columns, p, b - 1);
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
