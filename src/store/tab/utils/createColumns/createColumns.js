export const createColumns = (block_full_id) => {
	const new_columns_all_ids = [1, 2, 3, 4, 5]
		.map(column_id => `${block_full_id}-${column_id}`);

	const new_columns_by_id = [1, 2, 3, 4, 5]
		.reduce((result, column_id) => ({
			...result,
			[`${block_full_id}-${column_id}`]: {
				id: `${block_full_id}-${column_id}`,
			},
		}), {});

	return {
		new_columns_all_ids,
		new_columns_by_id,
	};
};
