import { extract } from '../extractIds';

describe('extract Part Id', () => {
    it('should not crash with wrong values', () => {
        expect(extract.partId()).toBe('1');
        expect(extract.partId({})).toBe('1');
        expect(extract.partId(undefined)).toBe('1');
        expect(extract.partId({ full_id: null })).toBe('1');
    });

    it('should return part_id string 4', () => {
        expect(extract.partId({
            full_id: '4',
            return_number: false,
        })).toBe('4');
        expect(extract.partId({
            full_id: 4,
        })).toBe('4');
        expect(extract.partId({
            full_id: '4-',
        })).toBe('4');
    });

    it('should return part_id number 4', () => {
        expect(extract.partId({
            full_id: '4',
            return_number: true,
        })).toBe(4);
        expect(extract.partId({
            full_id: 4,
            return_number: true,
        })).toBe(4);
        expect(extract.partId({
            full_id: '4-',
            return_number: true,
        })).toBe(4);
    });

    it('should return part_id 6', () => {
        expect(extract.partId({
            full_id: '6-4-2',
        })).toBe('6');
    });

    it('should return part_id 2', () => {
        expect(extract.partId({
            full_id: '2-5-7-7-1',
        })).toBe('2');
    });
});

describe('extract Block Id', () => {
    it('should not crash with wrong values', () => {
        expect(extract.blockId()).toBe('1');
        expect(extract.blockId({})).toBe('1');
        expect(extract.blockId(undefined)).toBe('1');
        expect(extract.blockId({ full_id: null })).toBe('1');
        expect(extract.blockId({ full_id: 4 })).toBe('1');
        expect(extract.blockId({ full_id: '4-' })).toBe('1');
    });

    it('should return block_id string 623', () => {
        expect(extract.blockId({
            full_id: '4-623',
            return_number: false,
        })).toBe('623');
        expect(extract.blockId({
            full_id: '4-623-',
        })).toBe('623');
    });

    it('should return block_id number 82', () => {
        expect(extract.blockId({
            full_id: '42-82',
            return_number: true,
        })).toBe(82);
        expect(extract.blockId({
            full_id: '42-82-',
            return_number: true,
        })).toBe(82);
        expect(extract.blockId({
            full_id: '42-82-564-1',
            return_number: true,
        })).toBe(82);
    });

    it('should return block_id 3', () => {
        expect(extract.blockId({
            full_id: '634-3-211',
        })).toBe('3');
    });

    it('should return block_id 2', () => {
        expect(extract.blockId({
            full_id: '1-2-6-7-4-',
        })).toBe('2');
    });
});
