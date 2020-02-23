import { createColumns } from '../../utils/createColumns';

export const addPart = (state = {}) => {
	const parts = state.parts || {};
	const next_state = { ...state };
	let next_part_id = 1;

	function updateNextState({ object, field, value }) {
		next_state[object] = {
			...next_state[object],
			[field]: value,
		};
	}

	function returnUpdatedStore() {
		return { ...next_state };
	}

	function addColumnsToIdsObject(block_full_id) {
		const { new_columns_by_id } = createColumns(block_full_id);
		const columns_by_id = (next_state.columns || {}).by_id || {};
		const columns_by_id_updated = {
			...columns_by_id,
			...new_columns_by_id,
		};
		updateNextState({
			object: 'columns',
			field: 'by_id',
			value: columns_by_id_updated,
		});

		return returnUpdatedStore();
	}

	function addColumnsToIdsList(block_full_id) {
		const { new_columns_all_ids } = createColumns(block_full_id);
		const columns_all_ids = (next_state.columns || {}).all_ids || [];
		const columns_all_ids_updated = [
			...columns_all_ids,
			...new_columns_all_ids,
		].filter((el, i, a) => i === a.indexOf(el));
		updateNextState({
			object: 'columns',
			field: 'all_ids',
			value: columns_all_ids_updated,
		});

		return addColumnsToIdsObject(block_full_id);
	}

	function addBlockToIdsObject(block_object) {
		const blocks_by_id = (next_state.blocks || {}).by_id || {};
		const blocks_by_id_updated = {
			...blocks_by_id,
			[block_object.id]: block_object,
		};
		updateNextState({
			object: 'blocks',
			field: 'by_id',
			value: blocks_by_id_updated,
		});

		return addColumnsToIdsList(block_object.id);
	}

	function addBlockToIdsList(block_object) {
		const blocks_all_ids = (next_state.blocks || {}).all_ids || [];
		const blocks_all_ids_updated = [
			...blocks_all_ids,
			block_object.id,
		];
		updateNextState({
			object: 'blocks',
			field: 'all_ids',
			value: blocks_all_ids_updated,
		});

		return addBlockToIdsObject(block_object);
	}

	function createBlockObject() {
		const block_full_id = `${next_part_id}-1`;
		const block_object = { id: block_full_id };

		return addBlockToIdsList(block_object);
	}

	function addPartToIdsObject() {
		const parts_by_id = (next_state.parts || {}).by_id || {};
		const parts_by_id_updated = {
			...parts_by_id,
			[next_part_id]: {
				id: next_part_id,
			},
		};
		updateNextState({
			object: 'parts',
			field: 'by_id',
			value: parts_by_id_updated,
		});

		return createBlockObject();
	}

	function addPartToIdsList() {
		const parts_all_ids = (next_state.parts || {}).all_ids || [];
		const parts_all_ids_updated = [...parts_all_ids, next_part_id];
		updateNextState({
			object: 'parts',
			field: 'all_ids',
			value: parts_all_ids_updated,
		});

		return addPartToIdsObject();
	}

	function getNextPartId() {
		const all_ids = parts.all_ids || [];
		const last_part_id = all_ids
			.reduce((result, current) => (
				current >= result ? current : result
			), 0);
		next_part_id = last_part_id + 1;

		return addPartToIdsList();
	}

	return getNextPartId();
};
