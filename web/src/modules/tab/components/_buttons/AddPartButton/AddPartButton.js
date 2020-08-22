import React from 'react';
import { useDispatch } from 'react-redux';
import * as s from './AddPartButton.style';

// Actions
import { addPart } from '../../../store/actions';

const AddPartButton = () => {
    const dispatch = useDispatch();

    function exportTab() {
        const action = addPart();
        dispatch(action);
    }

    return (
        <s.AddPartButton type="button" onClick={exportTab}>
            Add new part
        </s.AddPartButton>
    );
};

export default AddPartButton;
