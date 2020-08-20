import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './Column.style';

// Components
import Note from '../Note';
import ChordSelection from '../ChordSelection';

function Column({ column_full_id = '' }) {
    const lines = useSelector(store => store
        .tab.lines, shallowEqual);
    const user_is_writing = useSelector(store => store
        .tab.user_is_writing, shallowEqual);

    if (user_is_writing === 'chords') {
        return (
            <s.Column data-test="column-render">
                <ChordSelection
                    column_full_id={column_full_id}
                    data-test="notes-render"
                />
                {(lines || []).map(l => (
                    <Note
                        key={l}
                        column_full_id={column_full_id}
                        line_id={l}
                        data-test="notes-render"
                    />
                ))}
            </s.Column>
        );
    }

    return (
        <s.Column data-test="column-render">
            {(lines || []).map(l => (
                <Note
                    key={l}
                    column_full_id={column_full_id}
                    line_id={l}
                    data-test="notes-render"
                />
            ))}
        </s.Column>
    );
}

Column.propTypes = {
    column_full_id: PropTypes.string.isRequired,
};

export default Column;
