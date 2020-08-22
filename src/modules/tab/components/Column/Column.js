import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

// CSS
import * as s from './Column.style';

// Components
import Note from '../Note';
import ChordSelection from '../ChordSelection';

function Column({ full_column_id }) {
    const lines = useSelector(store => store
        .tab.lines, shallowEqual);
    const user_is_writing = useSelector(store => store
        .tab.user_is_writing, shallowEqual);

    if (user_is_writing === 'chords') {
        return (
            <s.Column data-test="column-render">
                <ChordSelection
                    full_column_id={full_column_id}
                    data-test="notes-render"
                />
                {(lines || []).map(l => (
                    <Note
                        key={l}
                        full_column_id={full_column_id}
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
                    full_column_id={full_column_id}
                    line_id={l}
                    data-test="notes-render"
                />
            ))}
        </s.Column>
    );
}

Column.propTypes = {
    full_column_id: PropTypes.string.isRequired,
};

export default Column;
