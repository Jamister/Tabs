import instruments from '../../instruments';

export const returnChord = (key_code, instrument) => {
	let chord_key = '';

	switch (key_code) {
	// C
	case 67: {
		chord_key = 'C';
		break;
	}
	// D
	case 68: {
		chord_key = 'D';
		break;
	}
	// E
	case 69: {
		chord_key = 'E';
		break;
	}
	// F
	case 70: {
		chord_key = 'F';
		break;
	}
	// G
	case 71: {
		chord_key = 'G';
		break;
	}
	// A
	case 65: {
		chord_key = 'A';
		break;
	}
	// B
	case 66: {
		chord_key = 'B';
		break;
	}
	// default
	default:
	}

	const chord = (instruments[instrument].chords[chord_key] || {})[1] || null;
	return chord;
};
