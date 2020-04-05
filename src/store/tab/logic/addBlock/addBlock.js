function createColumns({
	state,
	block_id,
	next_block_id,
	part_id,
}) {
	const columns = state.columns || {};
	const all_ids = columns.all_ids || [];
	const by_id = columns.by_id || {};

	const columns_all_ids = [1, 2, 3, 4, 5].map(column_id => (
		`${next_block_id}-${column_id}`
	));
	const _all_ids = [
		...all_ids,
		...columns_all_ids,
	].filter((el, i, a) => i === a.indexOf(el));
	const columns_by_id = [1, 2, 3, 4, 5].reduce((result, column_id) => ({
		...result,
		[`${next_block_id}-${column_id}`]: {
			part_id,
			block_id,
			id: `${next_block_id}-${column_id}`,
		},
	}), {});
	return {
		all_ids: _all_ids,
		by_id: {
			...by_id,
			...columns_by_id,
		},
	};
}

function getNextBlock(by_id, part_id) {
	let next_block_id = `${part_id}-${1}`;
	let block_id = 0;

	for (let i = 1; i <= 1000; i++) {
		if (by_id[`${part_id}-${i}`] === undefined) {
			next_block_id = `${part_id}-${i}`;
			block_id = i;
			break;
		}
	}

	return { next_block_id, block_id };
}

export const addBlock = (_state, _action) => {
	const state = _state || {};
	const action = _action || {};
	const blocks = state.blocks || {};
	const all_ids = blocks.all_ids || [];
	const by_id = blocks.by_id || {};
	const { part_id } = action;

	if (part_id === undefined) {
		return { ...state };
	}

	const { next_block_id, block_id } = getNextBlock(by_id, part_id);
	const _all_ids = [...all_ids, next_block_id]
		.filter((el, i, a) => i === a.indexOf(el));
	const _blocks = {
		all_ids: _all_ids,
		by_id: {
			...by_id,
			[next_block_id]: {
				part_id,
				id: next_block_id,
			},
		},
	};

	// TODO replace by the function used in addPart
	const columns = createColumns({
		state,
		block_id,
		next_block_id,
		part_id,
	});

	return {
		...state,
		blocks: _blocks,
		columns,
	};
};
