import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as s from './AddBlockButton.style';

// Actions
import { addBlock } from '../../../store/actions';

function AddBlockButton({ part_id }) {
    const dispatch = useDispatch();

    function addNewBlock() {
        dispatch(addBlock(part_id));
    }

    return (
        <s.AddBlockButton
            type="button"
            data-note="true"
            onClick={addNewBlock}
        >
            +
        </s.AddBlockButton>
    );
}

AddBlockButton.propTypes = {
    part_id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default AddBlockButton;
