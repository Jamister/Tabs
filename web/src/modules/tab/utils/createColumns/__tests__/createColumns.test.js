import { createColumns } from '../createColumns';

describe('createColumns', () => {
    it('should not crash with blank values', () => {
        const result = createColumns();
        expect(result).toStrictEqual({
            new_columns_all_ids: [],
            new_columns_by_id: {},
        });
    });

    it('should create 5 columns', () => {
        const result = createColumns('4-1');
        const expected = {
            new_columns_all_ids: [
                '4-1-1',
                '4-1-2',
                '4-1-3',
                '4-1-4',
                '4-1-5',
            ],
            new_columns_by_id: {
                '4-1-1': {
                    id: '4-1-1',
                },
                '4-1-2': {
                    id: '4-1-2',
                },
                '4-1-3': {
                    id: '4-1-3',
                },
                '4-1-4': {
                    id: '4-1-4',
                },
                '4-1-5': {
                    id: '4-1-5',
                },
            },
        };
        expect(result).toStrictEqual(expected);
    });
});
