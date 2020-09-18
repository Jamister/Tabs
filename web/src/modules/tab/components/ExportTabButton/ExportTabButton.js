import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Modal, Button } from 'antd';
import * as s from './ExportTabButton.style';

// Actions
import * as actions from '../../store/actions';

const ExportTabButton = () => {
    const dispatch = useDispatch();
    const [visible, handleModal] = useState(false);
    const printed_tab = useSelector(store => store
        .tab.printed_tab, shallowEqual);

    function exportTab() {
        dispatch(actions.exportTabFormatTxt());
        handleModal(true);
    }

    function closeModal() {
        handleModal(false);
    }

    return (
        <>
            <Button onClick={exportTab}>
                Exportar tab
            </Button>
            <Modal
                title="Basic Modal"
                visible={visible}
                onCancel={closeModal}
                width={1000}
                destroyOnClose
                footer={null}
            >
                <s.PrintedTabWrapper>{printed_tab}</s.PrintedTabWrapper>
            </Modal>
        </>
    );
};

export default ExportTabButton;
