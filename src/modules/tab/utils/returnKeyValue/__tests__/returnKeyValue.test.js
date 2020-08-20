import { returnKeyValue } from '../returnKeyValue';

test('should return default', () => {
    expect(returnKeyValue()).toBe('');
    expect(returnKeyValue(null, null)).toBe('');
    expect(returnKeyValue(36, null)).toBe('');
    expect(returnKeyValue(null, '')).toBe('');
});

test('should return prevalue', () => {
    expect(returnKeyValue(36, '22')).toBe('22');
});
