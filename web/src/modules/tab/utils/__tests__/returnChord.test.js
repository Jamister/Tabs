import returnChord from '../returnChord';

describe('returnChord', () => {
    it('should return default (null)', () => {
        const blank = returnChord();
        expect(blank).toBe(null);
        const wrong_values1 = returnChord(1, null);
        expect(wrong_values1).toBe(null);
        const wrong_values2 = returnChord(null, null);
        expect(wrong_values2).toBe(null);
    });

    it('should return C chord', () => {
        const c_chord = returnChord('C', 'guitar');
        expect(c_chord).toStrictEqual([0, 1, 0, 2, 3, 0]);
    });

    it('should return F chord', () => {
        const f_chord = returnChord('F', 'guitar');
        expect(f_chord).toStrictEqual([1, 1, 2, 3, 3, 1]);
    });
});
