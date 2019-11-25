function removeColumnsInLastBlock(state, last_block_id) {
	const columns = state.columns || {};
	const all_ids = columns.all_ids || [];
	const by_id = columns.by_id || {};

	const _by_id = { ...by_id };
	const _all_ids = all_ids.filter(id => {
		const to_delete = id.indexOf(`${last_block_id}-`) !== -1;
		if (to_delete) {
			delete _by_id[id];
		}
		return !to_delete;
	});

	return {
		all_ids: _all_ids,
		by_id: _by_id,
	};
}

export const removeBlock = (state, action) => {
	const { part_id } = action;
	let last_block_id = `${part_id}-${1}`;
	// let block_id = 0;
	for (let i = 1; i <= 1000; i++) {
		if (state.blocks.by_id[`${part_id}-${i}`] === undefined) {
			last_block_id = `${part_id}-${i - 1}`;
			// block_id = i - 1;
			break;
		}
	}
	const all_ids = state.blocks.all_ids
		.filter(id => id !== last_block_id);
	const by_id = { ...state.blocks.by_id };
	delete by_id[last_block_id];
	const blocks = {
		all_ids,
		by_id,
	};

	// remove columns
	const columns = removeColumnsInLastBlock(state, last_block_id);

	// TODO remove notes

	return {
		...state,
		blocks,
		columns,
	};
};
