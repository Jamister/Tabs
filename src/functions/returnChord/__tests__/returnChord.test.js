import { returnChord } from '../returnChord';

it('should return default (null)', () => {
	const blank = returnChord();
	expect(blank).toBe(null);

	const wrong_values = returnChord({}, {});
	expect(wrong_values).toBe(null);

	const wrong_values2 = returnChord(null, null);
	expect(wrong_values2).toBe(null);
});

it('should return C chord', () => {
	const c_chord = returnChord(67, 'guitar');
	expect(c_chord).toStrictEqual([0, 3, 2, 0, 1, 0]);
});

it('should return F chord', () => {
	const f_chord = returnChord(70, 'guitar');
	expect(f_chord).toStrictEqual([1, 3, 3, 2, 1, 1]);
});
