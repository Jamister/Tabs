import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as s from './Note.style';

// Actions
import { selectNote } from '../../store/actions';

// Components
import NoteValue from './NoteValue';
import NoteWidthSpace from './NoteWidthSpace';

// Functions
import { extract } from '../../utils/extractIds';
import { isNoteSelectedSelector } from 'modules/tab/store/selectors';

function NoteVK({ full_column_id, line_id = '' }) {
    const dispatch = useDispatch();
    const note_id = `${full_column_id}-${line_id}`;
    const is_selected = useSelector(store => isNoteSelectedSelector(store, note_id));
    const user_is_writing = useSelector(store => store
        .tab.user_is_writing, shallowEqual);

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
            l: line_id,
        });
        dispatch(action);
    }

    if (user_is_writing === 'chords') {
        return (
            <>
                <s.Note data-note="true" line={line_id}>
                    <NoteValue note_id={note_id} />
                </s.Note>
                <NoteWidthSpace note_id={note_id} />
            </>
        );
    }

    return (
        <>
            <s.Note
                type="button"
                data-note="true"
                line={line_id}
                is_selected={is_selected}
                onClick={handleNote}
            >
                <NoteValue note_id={note_id} />
            </s.Note>
            <NoteWidthSpace note_id={note_id} />
        </>
    );
}

NoteVK.propTypes = {
    full_column_id: PropTypes.string.isRequired,
    line_id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default NoteVK;
