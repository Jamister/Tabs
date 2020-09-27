import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Tooltip } from 'antd';
import * as s from './AddBlockButton.style';

// Actions
import * as actions from 'modules/tab/store/actions';

function AddBlockButton({ part_id }) {
    const dispatch = useDispatch();

    function addNewBlock() {
        dispatch(actions.addBlock(part_id));
    }

    return (
        <Tooltip
            placement="right"
            title={<span>Adicionar compasso</span>}
        >
            <s.AddBlockButton
                type="button"
                data-note="true"
                onClick={addNewBlock}
            >
                +
            </s.AddBlockButton>
        </Tooltip>
    );
}

AddBlockButton.propTypes = {
    part_id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default AddBlockButton;
