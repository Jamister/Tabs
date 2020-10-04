import returnKeyValue from '../returnKeyValue';

describe('returnKeyValue', () => {
    it('should return default value', () => {
        const result = returnKeyValue('', '2');
        expect(result).toBe('2');
    });

    it('should return prevalue', () => {
        const result = returnKeyValue('s', '2');
        expect(result).toBe('2s');
    });

    it('should delete last char', () => {
        expect(
            returnKeyValue('Backspace', '21')
        ).toBe('2');
        expect(
            returnKeyValue('Backspace', '')
        ).toBe('');
    });

    it('should delete all', () => {
        const result = returnKeyValue('Delete', '21');
        expect(result).toBe('');
    });

    it('should return arrows', () => {
        expect(
            returnKeyValue('ArrowUp', '2')
        ).toBe('arrows');
        expect(
            returnKeyValue('ArrowDown', '2')
        ).toBe('arrows');
        expect(
            returnKeyValue('ArrowRight', '2')
        ).toBe('arrows');
        expect(
            returnKeyValue('ArrowLeft', '2')
        ).toBe('arrows');
        expect(
            returnKeyValue('Tab', '2')
        ).toBe('arrows');
    });
});
