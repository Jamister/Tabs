import createColumns from '../createColumns';

describe('createColumns', () => {
    it('should not crash with blank values', () => {
        const result = createColumns();
        expect(result).toStrictEqual({
            allIds: [],
            byId: {},
        });
    });

    it('should create 5 columns', () => {
        const result = createColumns('p4-b2');
        expect(result.allIds).toHaveLength(5);
        const [
            column1FullId,
            column2FullId,
            column3FullId,
            column4FullId,
            column5FullId,
        ] = result.allIds;
        expect(result.byId).toHaveProperty(column1FullId);
        expect(result.byId).toHaveProperty(column2FullId);
        expect(result.byId).toHaveProperty(column3FullId);
        expect(result.byId).toHaveProperty(column4FullId);
        expect(result.byId).toHaveProperty(column5FullId);
    });
});

