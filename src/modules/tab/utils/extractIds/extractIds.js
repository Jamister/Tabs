const extractId = ({ full_id, string_location = 0 } = {}) => {
    const split_values = (full_id || '').split('-');
    const id = split_values[string_location];
    return id;
};

const partId = ({ full_id } = {}) => (
    extractId({ full_id, string_location: 0 })
);

const blockId = ({ full_id } = {}) => (
    extractId({ full_id, string_location: 1 })
);

const columnId = ({ full_id } = {}) => (
    extractId({ full_id, string_location: 2 })
);

export const extract = {
    partId,
    blockId,
    columnId,
};
