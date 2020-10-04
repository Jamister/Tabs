import instruments from 'instruments';

const returnChord = (key, instrument) => {
    if (!key) return null;
    if (!instrument) return null;
    const chord_key = `${key}`.toUpperCase();
    const chord = (instruments[instrument].chords[chord_key] || {})[1] || null;
    return chord;
};

export default returnChord;
