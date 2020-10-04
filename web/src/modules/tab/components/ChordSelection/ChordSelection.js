import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as s from './ChordSelection.style';

// Actions
import * as actions from '../../store/actions';

// Components
import ChordPopover from '../ChordPopover';

// Utils
import { extract } from '../../utils/extractIds';
import { isNoteSelectedSelector } from 'modules/tab/store/selectors';

function ChordSelection({ full_column_id = '' }) {
    const dispatch = useDispatch();
    const note_id = `${full_column_id}-1`;
    const is_selected = useSelector(store => isNoteSelectedSelector(store, note_id));

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
        dispatch(
            actions.selectNote({
                p: part_id,
                b: block_id,
                c: column_id,
                l: 1,
            }),
        );
    }

    if (is_selected) {
        return (
            <ChordPopover>
                <s.Chord
                    type="button"
                    data-note="true"
                    aria-label="chord button"
                    is_selected={is_selected}
                    onClick={handleNote}
                />
                <s.ChordWidthSpace />
            </ChordPopover>
        );
    }

    return (
        <s.Chord
            type="button"
            data-note="true"
            aria-label="chord button"
            is_selected={is_selected}
            onClick={handleNote}
        />
    );
}

ChordSelection.propTypes = {
    full_column_id: PropTypes.string.isRequired,
};

export default ChordSelection;
