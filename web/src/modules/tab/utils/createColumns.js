import createUniqueId from 'modules/shared/utils/createUniqueId';

const createColumns = (block_full_id = '') => {
    const columns = {};

    function returnEmptyColumns() {
        return { all_ids: [], by_id: {} };
    }

    function returnColumns() {
        return columns;
    }

    function createById() {
        const by_id = {};
        columns.all_ids.forEach(id => {
            by_id[id] = {};
        });
        columns.by_id = by_id;
        return returnColumns();
    }

    function createAllIds() {
        const all_ids = [1, 2, 3, 4, 5].map(column_number => {
            const hash = `column ${column_number}`;
            const { smaller_id: column_id } = createUniqueId(hash);
            return `${block_full_id}-${column_id}`;
        });
        columns.all_ids = all_ids;
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

export default createColumns;
