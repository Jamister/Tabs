export const createColumns = (block_full_id = '') => {
	const columns = {};

	function returnEmptyColumns() {
		return {
			new_columns_all_ids: [],
			new_columns_by_id: {},
		};
	}

	function returnColumns() {
		return columns;
	}

	function createById() {
		const by_id = {};
		columns.new_columns_all_ids
			.forEach(id => {
				by_id[id] = { id };
			});
		columns.new_columns_by_id = { ...by_id };
		return returnColumns();
	}

	function createAllIds() {
		const all_ids = [1, 2, 3, 4, 5]
			.map(column_id => `${block_full_id}-${column_id}`);
		columns.new_columns_all_ids = [...all_ids];
		return createById();
	}

	function checkEmptyParam() {
		const empty_param = block_full_id === '';
		return empty_param
			? returnEmptyColumns()
			: createAllIds();
	}

	return checkEmptyParam();
};
