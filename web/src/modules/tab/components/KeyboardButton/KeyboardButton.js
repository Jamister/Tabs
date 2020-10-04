import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as s from './KeyboardButton.style';

// Actions
import * as actions from '../../store/actions';

function KeyboardButton({ char, width }) {
    const dispatch = useDispatch();

    function handleChange() {
        dispatch(actions.startUpdatingNote({ key: char }));
    }

    return (
        <s.KeyboardButton
            key={char}
            widthValue={width}
            type="button"
            data-note="true"
            onClick={handleChange}
        >
            {char}
        </s.KeyboardButton>
    );
}

KeyboardButton.propTypes = {
    char: PropTypes.string.isRequired,
    width: PropTypes.string,
};

KeyboardButton.defaultProps = {
    width: '30px',
};

export default KeyboardButton;
