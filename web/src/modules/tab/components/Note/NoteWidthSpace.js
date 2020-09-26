import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './NoteWidthSpace.style';

function NoteWidthSpace({ note_id }) {
    const note = useSelector(store => store.tab.notes[note_id], shallowEqual) || {};
    const note_value = note.value || '';
    const note_size = note_value.length <= 8
        ? note_value.length
        : 8;

    if (note_value !== '') {
        return <s.WidthSpace size={note_size} />;
    }

    return <s.WidthSpace size={1} />;
}

NoteWidthSpace.propTypes = {
    note_id: PropTypes.string.isRequired,
};

export default NoteWidthSpace;
