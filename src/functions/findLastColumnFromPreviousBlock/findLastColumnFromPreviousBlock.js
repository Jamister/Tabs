export const findLastColumnFromPreviousBlock = (columns, part_id, block_id) => {
	const { by_id } = columns;
	for (let i = 1; i <= 1000; i++) {
		if (by_id[`${part_id}-${block_id}-${i}`] === undefined) {
			return i - 1;
		}
	}
	return 1;
};
