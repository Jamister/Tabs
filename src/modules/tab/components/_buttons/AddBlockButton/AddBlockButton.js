import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Actions
import { addBlock } from '../../../store/actions';

function AddBlockButton({ part_id }) {
    const dispatch = useDispatch();

    function addNewBlock() {
        dispatch(addBlock(part_id));
    }

    return (
        <button
            type="button"
            styleName="add-block-button"
            onClick={addNewBlock}
        >
            +
        </button>
    );
}

AddBlockButton.propTypes = {
    part_id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default CSSModules(AddBlockButton, styles, { allowMultiple: true });
