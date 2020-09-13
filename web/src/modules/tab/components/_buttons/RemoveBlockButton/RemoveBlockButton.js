import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as s from './RemoveBlockButton.style';

// Actions
import { removeBlock } from '../../../store/actions';

function RemoveBlockButton({ part_id }) {
    const dispatch = useDispatch();

    function removeLastBlock() {
        dispatch(removeBlock(part_id));
    }

    return (
        <s.RemoveBlockButton
            type="button"
            data-note="true"
            onClick={removeLastBlock}
        >
            -
        </s.RemoveBlockButton>
    );
}

RemoveBlockButton.propTypes = {
    part_id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default RemoveBlockButton;
