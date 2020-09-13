import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
// import * as s from './AddPartButton.style';

// Actions
import * as actions from 'modules/tab/store/actions';

const AddPartButton = () => {
    const dispatch = useDispatch();

    function addNewPart() {
        dispatch(actions.addPart());
    }

    return (
        <Button type="primary" onClick={addNewPart}>
            Add new part
        </Button>
    );
};

export default AddPartButton;
