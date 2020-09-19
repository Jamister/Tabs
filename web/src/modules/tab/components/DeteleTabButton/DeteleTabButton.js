import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'antd';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// Api
import { DELETE_TAB } from 'modules/tab/api';

const DeteleTabButton = () => {
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const [deleteTab, { data, loading, error }] = useMutation(DELETE_TAB);
    const tabId = useSelector(store => store.tab.tabHashId, shallowEqual);

    useEffect(() => {
        if (data) {
            history.push('/me/tabs');
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.log(error); // TODO error
        }
    }, [error]);

    function handleModal() {
        setVisible(!visible);
    }

    function handleOk() {
        deleteTab({ variables: { tabId } });
    }

    return (
        <>
            <Button type="link" onClick={handleModal}>
                <FontAwesomeIcon icon={faTrash} /> Apagar
            </Button>
            <Modal
                title="Apagar tablatura"
                visible={visible}
                onOk={handleOk}
                confirmLoading={loading}
                onCancel={handleModal}
                okText="Apagar tab"
                okType="danger"
                destroyOnClose
            >
                Tem certeza que deseja apagar essa tablatura?
            </Modal>
        </>
    );
};

export default DeteleTabButton;
