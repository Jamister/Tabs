import { createColumns } from '../../utils/createColumns';

export const addPart = (state = {}) => {
	const parts = state.parts || {};
	const next_state = { ...state };
	let next_part_id = 1;

	function returnUpdatedStore() {
		return { ...next_state };
	}

	function addColumnsToStore(block_full_id) {
		const {
			new_columns_all_ids,
			new_columns_by_id,
		} = createColumns(block_full_id);

		const columns_all_ids = (next_state.columns || {}).all_ids || [];
		const columns_all_ids_updated = [
			...columns_all_ids,
			...new_columns_all_ids,
		].filter((el, i, a) => i === a.indexOf(el));

		const columns_by_id = (next_state.columns || {}).by_id || {};
		const columns_by_id_updated = {
			...columns_by_id,
			...new_columns_by_id,
		};

		next_state.columns = {
			all_ids: columns_all_ids_updated,
			by_id: columns_by_id_updated,
		};

		return returnUpdatedStore();
	}

	function addBlockToStore() {
		const block_full_id = `${next_part_id}-1`;
		const block_object = {
			part_id: next_part_id,
			id: block_full_id,
		};
		const blocks_all_ids = (next_state.blocks || {}).all_ids || [];
		const blocks_all_ids_updated = [
			...blocks_all_ids,
			block_full_id,
		];
		const blocks_by_id = (next_state.blocks || {}).by_id || {};
		const blocks_by_id_updated = {
			...blocks_by_id,
			[block_full_id]: block_object,
		};
		next_state.blocks = {
			all_ids: blocks_all_ids_updated,
			by_id: blocks_by_id_updated,
		};

		return addColumnsToStore(block_full_id);
	}

	function addPartToStore() {
		const all_ids = (next_state.parts || {}).all_ids || [];
		const all_ids_updated = [
			...all_ids,
			next_part_id,
		];
		const by_id = (next_state.parts || {}).by_id || {};
		const by_id_updated = {
			...by_id,
			[next_part_id]: {
				id: next_part_id,
			},
		};
		next_state.parts = {
			all_ids: all_ids_updated,
			by_id: by_id_updated,
		};

		return addBlockToStore();
	}

	function getLastPartId() {
		const all_ids = parts.all_ids || [];
		const last_part_id = all_ids
			.reduce((result, current) => (
				current >= result ? current : result
			), 0);
		next_part_id = last_part_id + 1;

		return addPartToStore();
	}

	return getLastPartId();
};
