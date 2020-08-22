import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// CSS
import * as s from './ChordSelection.style';

// Actions
import { selectNote } from '../../store/actions';

// Functions
import { extract } from '../../utils/extractIds';

function ChordSelection({ full_column_id = '' }) {
    const dispatch = useDispatch();
    const note_id = `${full_column_id}-1`;
    const selected_note = useSelector(store => store
        .tab.selected_note, shallowEqual) || {};
    const { p, b, c, l } = selected_note;
    const selected_note_id = `${p}-${b}-${c}-${l}`;
    const selected = note_id === selected_note_id;
    const part_id = extract.partId({
        full_id: full_column_id,
    });
    const block_id = extract.blockId({
        full_id: full_column_id,
    });
    const column_id = extract.columnId({
        full_id: full_column_id,
    });

    function handleNote() {
        const action = selectNote({
            p: part_id,
            b: block_id,
            c: column_id,
            l: 1,
        });
        dispatch(action);
    }

    return (
        <s.Chord
            type="button"
            aria-label="chord button"
            selected={selected}
            onClick={handleNote}
        />
    );
}

ChordSelection.propTypes = {
    full_column_id: PropTypes.string.isRequired,
};

export default ChordSelection;
