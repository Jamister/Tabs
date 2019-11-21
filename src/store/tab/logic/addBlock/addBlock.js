export const addBlock = (state, action) => {
	const { part_id } = action;
	let next_block_id = `${part_id}-${1}`;
	let block_id = 0;
	for (let i = 1; i <= 1000; i++) {
		if (state.blocks.by_id[`${part_id}-${i}`] === undefined) {
			next_block_id = `${part_id}-${i}`;
			block_id = i;
			break;
		}
	}
	const blocks = {
		all_ids: [
			...state.blocks.all_ids,
			next_block_id,
		],
		by_id: {
			...state.blocks.by_id,
			[next_block_id]: {
				part_id,
				id: next_block_id,
			},
		},
	};
	const columns_all_ids = [1, 2, 3, 4, 5].map(column_id => (
		`${next_block_id}-${column_id}`
	));
	const all_ids = [
		...state.columns.all_ids,
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
	const columns = {
		all_ids,
		by_id: {
			...state.columns.by_id,
			...columns_by_id,
		},
	};
	return {
		...state,
		blocks,
		columns,
	};
};
