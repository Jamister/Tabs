import createUniqueId from 'modules/shared/utils/createUniqueId';

const createColumns = (blockFullId = '') => {
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
        const allIds = [1, 2, 3, 4, 5].map(columnNumber => {
            const hash = `column ${columnNumber}`;
            const { smaller_id: columnId } = createUniqueId(hash);
            return `${blockFullId}-${columnId}`;
        });
        columns.allIds = allIds;
        return createById();
    }

    function checkEmptyParam() {
        const emptyParam = blockFullId === '';
        return emptyParam
            ? returnEmptyColumns()
            : createAllIds();
    }

    return checkEmptyParam();
};

export default createColumns;
