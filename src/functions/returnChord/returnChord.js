import instruments from '../../instruments';

export const returnChord = (key_code, instrument) => {
	switch (key_code) {
	// C
	case 67: {
		const chord = instruments[instrument].chords.C[1];
		return chord;
	}
	// F
	case 70: {
		const chord = instruments[instrument].chords.F[1];
		return chord;
	}

	// default
	default: return null;
	}
};
