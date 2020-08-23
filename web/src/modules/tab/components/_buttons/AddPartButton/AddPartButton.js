import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
// import * as s from './AddPartButton.style';

// Actions
import { addPart } from 'modules/tab/store/actions';

const AddPartButton = () => {
    const dispatch = useDispatch();

    function exportTab() {
        dispatch(addPart());
    }

    return (
        <Button type="primary" onClick={exportTab}>
            Add new part
        </Button>
    );
};

export default AddPartButton;
