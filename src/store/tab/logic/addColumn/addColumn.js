const addColumn = (state = {}) => {
	const columns = state.columns || {};
	const selected_note = state.selected_note || {};
	const { p, b, c, l } = selected_note;
	const new_state_to_return = { ...state };

	function returnDefaultState() {
		return { ...state };
	}

	function returnUpdatedState() {
		return { ...new_state_to_return };
	}

	function addNewColumn() {
		const all_ids = columns.all_ids || [];
		const by_id = columns.by_id || {};
		const next_column_id = `${p}-${b}-${c + 1}`;
		const new_columns = {
			all_ids: [
				...all_ids,
				next_column_id,
			],
			by_id: {
				...by_id,
				[next_column_id]: {
					part_id: p,
					block_id: b,
					id: next_column_id,
				},
			},
		};
		new_state_to_return.columns = new_columns;
		return returnUpdatedState();
	}

	function checkIfIsLastColumn() {
		const by_id = columns.by_id || {};
		const next_column_id = `${p}-${b}-${c + 1}`;
		const last_column = by_id[next_column_id] === undefined;
		return last_column
			? addNewColumn()
			: returnUpdatedState();
	}

	function checkEmptyNote() {
		const note_id = `${p}-${b}-${c}-${l}`;
		const note_value = ((state.notes || {})[note_id] || {}).value || '';
		const has_empty_value = note_value === '';
		return has_empty_value
			? returnDefaultState()
			: checkIfIsLastColumn();
	}

	function checkBlankPartId() {
		const no_part_found = p === undefined;
		return no_part_found
			? returnDefaultState()
			: checkEmptyNote();
	}

	return checkBlankPartId();
};

export default addColumn;
