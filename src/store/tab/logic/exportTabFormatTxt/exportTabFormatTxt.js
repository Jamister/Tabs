export const exportTabFormatTxt = (state = {}) => {
	const parts = state.parts || {};
	const blocks = state.blocks || {};
	const columns = state.columns || {};
	const lines = state.lines || [];
	const notes = state.notes || {};
	const space_between_columns = 2;

	function createLinesToPrint() {
		return lines.reduce((result, current) => ({
			...result,
			[current]: '',
		}), {});
	}

	const lines_to_print = createLinesToPrint();

	function printTab() {
		return Object
			.keys(lines_to_print)
			.reduce((result, current) => {
				const new_line_content = lines_to_print[current];
				const tab_with_new_line = `${result}\n${new_line_content}`;
				return tab_with_new_line;
			}, '');
	}

	// function checkIfTabIsBlank() {
	// 	return true;
	// }

	// function createLineBreakBetweenParts() {
	// 	replace \--\
	// }

	function filterIfHasId(all_ids, piece_of_id) {
		return all_ids.filter(id => id.indexOf(piece_of_id) !== -1);
	}

	function updateLinesToPrint(line, note_value) {
		const previous_content = lines_to_print[line] || '';
		lines_to_print[line] = `${previous_content}${note_value}`;
	}

	function getLengthOfHigherNoteInColumn(column_full_id) {
		return lines.reduce((result, current) => {
			const note_full_id = `${column_full_id}-${current}`;
			const note_size = ((notes[note_full_id] || {}).value || '').length;
			if (note_size >= result) {
				return note_size;
			}
			return result;
		}, 1);
	}

	function setBlankValue(default_number_of_chars) {
		let n = 1;
		let blank_value = '';
		while (n <= default_number_of_chars) {
			n++;
			blank_value += '-';
		}
		return blank_value;
	}

	function createBorder(with_space = true) {
		for (let l = 0; l < lines.length; l++) {
			const line = lines[l];
			const between_columns_value = with_space
				? setBlankValue(space_between_columns)
				: '';
			updateLinesToPrint(line, `|${between_columns_value}`);
		}
	}

	function fillTheLinesToPrint(column_full_id) {
		const default_number_of_chars = getLengthOfHigherNoteInColumn(column_full_id);
		const blank_value = setBlankValue(default_number_of_chars);
		const between_columns_value = setBlankValue(space_between_columns);

		for (let l = 0; l < lines.length; l++) {
			const line = lines[l];
			const note_full_id = `${column_full_id}-${line}`;
			const note_value = (notes[note_full_id] || {}).value || `${blank_value}`;
			const note_value_with_space = `${note_value}${between_columns_value}`;
			updateLinesToPrint(line, note_value_with_space);
		}
	}

	function loopThroughColumns(block_full_id) {
		const columns_all_ids = columns.all_ids || [];
		const columns_in_this_block = filterIfHasId(columns_all_ids, `${block_full_id}-`);
		const columns_length = columns_in_this_block.length;

		for (let c = 0; c < columns_length; c++) {
			const column_full_id = columns_in_this_block[c];
			fillTheLinesToPrint(column_full_id);
		}
	}

	function loopThroughBlocks(part_id) {
		const blocks_all_ids = blocks.all_ids || [];
		const blocks_in_this_part = filterIfHasId(blocks_all_ids, `${part_id}-`);
		const blocks_length = blocks_in_this_part.length;

		for (let b = 0; b < blocks_length; b++) {
			const block_full_id = blocks_in_this_part[b];
			loopThroughColumns(block_full_id);

			const last_block = b === blocks_length - 1;
			const with_space = !last_block;
			createBorder(with_space);
		}
	}

	function loopThroughParts() {
		const parts_all_ids = parts.all_ids || [];
		const parts_length = parts_all_ids.length;

		for (let p = 0; p < parts_length; p++) {
			const part_id = parts_all_ids[p];
			createBorder();
			loopThroughBlocks(part_id);
		}

		return printTab();
	}

	function startExporting() {
		return loopThroughParts();
	}

	return startExporting();
};
