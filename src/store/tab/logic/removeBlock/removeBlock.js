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

	// TODO remove columns

	// TODO remove notes

	return {
		...state,
		blocks,
		// columns: { $set: columns },
	};
};
