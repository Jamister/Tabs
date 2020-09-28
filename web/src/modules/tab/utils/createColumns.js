import createUniqueId from 'modules/shared/utils/createUniqueId';

const createColumns = (block_full_id = '') => {
    const columns = {};

    function returnEmptyColumns() {
        return { allIds: [], byId: {} };
    }

    function returnColumns() {
        return columns;
    }

    function createById() {
        const byId = {};
        columns.allIds.forEach(id => {
            byId[id] = {};
        });
        columns.byId = byId;
        return returnColumns();
    }

    function createAllIds() {
        const allIds = [1, 2, 3, 4, 5].map(column_number => {
            const hash = `column ${column_number}`;
            const { smaller_id: column_id } = createUniqueId(hash);
            return `${block_full_id}-${column_id}`;
        });
        columns.allIds = allIds;
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
