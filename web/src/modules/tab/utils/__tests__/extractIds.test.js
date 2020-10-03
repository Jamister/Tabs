import { extract } from '../extractIds';

describe('extract Part Id', () => {
    it('should not crash with wrong values', () => {
        expect(extract.partId()).toBe('');
        expect(extract.partId({})).toBe('');
        expect(extract.partId(undefined)).toBe('');
        expect(extract.partId({ full_id: null })).toBe('');
    });

    it('should return part_id 4', () => {
        expect(extract.partId({ full_id: '4' })).toBe('4');
        expect(extract.partId({ full_id: '4-' })).toBe('4');
    });

    it('should return part_id 6', () => {
        expect(extract.partId({ full_id: '6-4-2' })).toBe('6');
    });

    it('should return part_id 2', () => {
        expect(extract.partId({
            full_id: '23452-5-7-7-1',
        })).toBe('23452');
    });
});

describe('extract Block Id', () => {
    it('should return block_id 623', () => {
        expect(extract.blockId({ full_id: '4-623' })).toBe('623');
        expect(extract.blockId({ full_id: '4-623-' })).toBe('623');
    });

    it('should return block_id 3', () => {
        expect(extract.blockId({ full_id: '634-3-211' })).toBe('3');
    });

    it('should return block_id 2', () => {
        expect(extract.blockId({ full_id: '1-24543-6-7-4-' })).toBe('24543');
    });
});
