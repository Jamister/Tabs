const removeBlock = (state = {}, action = {}) => {
	const updated_state = { ...state };
	const blocks = state.blocks || {};
	const all_ids = blocks.all_ids || [];
	const by_id = blocks.by_id || {};

	function returnDefault() {
		return { ...state };
	}

	function updateStore() {
		return updated_state;
	}

	function removeNotesInLastBlock(last_block_id) {
		const notes = { ...state.notes };
		const notes_ids = Object.keys(notes) || [];
		notes_ids.forEach(note_id => {
			const to_delete = note_id.indexOf(`${last_block_id}-`) === 0;
			if (to_delete) {
				delete notes[note_id];
			}
			return !to_delete;
		});
		updated_state.notes = notes;
		return updateStore();
	}

	function removeColumnsInLastBlock(last_block_id) {
		const columns = state.columns || {};
		const columns_by_id = { ...columns.by_id || {} };
		const columns_all_ids = (columns.all_ids || [])
			.filter(id => {
				const to_delete = id.indexOf(`${last_block_id}-`) === 0;
				if (to_delete) {
					delete columns_by_id[id];
				}
				return !to_delete;
			});
		updated_state.columns = {
			all_ids: columns_all_ids,
			by_id: columns_by_id,
		};
		return removeNotesInLastBlock(last_block_id);
	}

	function removeBlockIdFromState(last_block_id) {
		const all_ids_updated = all_ids
			.filter(id => id !== last_block_id);
		const by_id_updated = { ...by_id };
		delete by_id_updated[last_block_id];
		const blocks_updated = {
			all_ids: all_ids_updated,
			by_id: by_id_updated,
		};
		updated_state.blocks = blocks_updated;
		return removeColumnsInLastBlock(last_block_id);
	}

	function findLastBlockId(part_id) {
		let last_block_id = `${part_id}-1`;
		// TODO improve
		for (let i = 1; i <= 1000; i++) {
			if (by_id[`${part_id}-${i}`] === undefined) {
				last_block_id = `${part_id}-${i - 1}`;
				break;
			}
		}
		return removeBlockIdFromState(last_block_id);
	}

	function checkEmptyParams() {
		const part_id = action.part_id || '';
		const empty_id = part_id === '';
		return empty_id
			? returnDefault()
			: findLastBlockId(part_id);
	}

	return checkEmptyParams();
};

export default removeBlock;
