const extractId = ({
	full_id,
	return_number = false,
	string_location = 0,
} = {}) => {
	const id = (full_id || '').toString();
	const split_values = id.split('-');
	const part_id = split_values[string_location] || '1';
	return return_number
		? Number(part_id)
		: part_id;
};

const partId = ({
	full_id,
	return_number = false,
} = {}) => (
	extractId({
		full_id,
		return_number,
		string_location: 0,
	})
);

const blockId = ({
	full_id,
	return_number,
} = {}) => (
	extractId({
		full_id,
		return_number,
		string_location: 1,
	})
);

const columnId = ({
	full_id,
	return_number,
} = {}) => (
	extractId({
		full_id,
		return_number,
		string_location: 2,
	})
);

export const extract = {
	partId,
	blockId,
	columnId,
};
