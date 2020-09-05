import React, { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

const CREATE_TAB = gql`
    mutation CreateTab($tab: String) {
        createTab(tab: $tab) {
            hashId
            tab
        }
    }
`;

const CreateTabButton = () => {
    const history = useHistory();
    const [createTab, { data, loading, error }] = useMutation(CREATE_TAB);

    useEffect(() => {
        if (data) {
            const tabId = data.hashId;
            history.push(`/tab/${tabId}`);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.log(error); // TODO error
        }
    }, [error]);

    function create() {
        createTab({ variables: { tab: '' } });
    }

    return (
        <Button
            type="secondary"
            loading={loading}
            onClick={create}
        >
            Criar nova tab
        </Button>
    );
};

export default CreateTabButton;
