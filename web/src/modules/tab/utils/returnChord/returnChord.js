import instruments from 'instruments';

export const returnChord = (key, instrument) => {
    const chord_key = key.toUpperCase();
    const chord = (instruments[instrument].chords[chord_key] || {})[1] || null;
    return chord;
};
