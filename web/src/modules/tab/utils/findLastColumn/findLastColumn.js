// TODO remove
export const findLastColumn = (columns, part_id, block_id) => {
    const by_id = (columns || {}).by_id || {};
    for (let i = 1; i <= 1000; i++) {
        if (
            by_id[`${part_id}-${block_id}-${i}`] === undefined
            && i > 1
        ) {
            return i - 1;
        }
    }
    return 1;
};
