import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// Components
import Modal from 'modules/shared/components/Modal';

// Css
import { Button } from 'antd';
import * as s from './ExportTab.style';

// Actions
import { exportTabFormatTxt } from '../../store/actions';

const ExportTab = () => {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);

    const printed_tab = useSelector(store => store.tab.printed_tab, shallowEqual);

    function exportTab() {
        dispatch(exportTabFormatTxt());
        setModal(true);
    }

    const handleModal = useCallback(() => {
        setModal(!modal);
    }, [modal]);

    return (
        <>
            {modal && (
                <Modal closeModal={handleModal}>
                    <>
                        <s.PrintedTabWrapper>{printed_tab}</s.PrintedTabWrapper>
                    </>
                </Modal>
            )}

            <Button onClick={exportTab}>
                Exportar tab
            </Button>
        </>
    );
};

export default ExportTab;
