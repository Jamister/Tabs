import React from 'react';
import { useDispatch } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Actions
import { addPart } from '../../../store/actions';

const AddPartButton = () => {
    const dispatch = useDispatch();

    function exportTab() {
        const action = addPart();
        dispatch(action);
    }

    return (
        <button type="button" onClick={exportTab}>
            Add new part
        </button>
    );
};

export default CSSModules(AddPartButton, styles, { allowMultiple: true });
