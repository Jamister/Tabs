import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';

// Actions
import * as actions from 'modules/tab/store/actions';

const AddPartButton = () => {
    const dispatch = useDispatch();

    function addNewPart() {
        dispatch(actions.addPart());
    }

    return (
        <Button type="primary" onClick={addNewPart}>
            Adicionar nova parte
        </Button>
    );
};

export default AddPartButton;
