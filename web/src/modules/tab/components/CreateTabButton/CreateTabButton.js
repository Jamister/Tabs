import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

// Api
import { CREATE_TAB } from 'modules/tab/api';

// Utils
import isUserLogged from 'modules/user/utils/isUserLogged';

const CreateTabButton = () => {
    const history = useHistory();
    const [createTab, { data, loading, error }] = useMutation(CREATE_TAB);

    useEffect(() => {
        function redirect(tabId) {
            history.push(`/tab/${tabId}`);
        }

        function saveTabIdToAssignInTheFuture(tabId) {
            const previousTabsToAssign = localStorage.getItem('tabsToAssign') || '';
            const tabsToAssign = `${previousTabsToAssign},${tabId}`;
            localStorage.setItem('tabsToAssign', tabsToAssign);
            redirect(tabId);
        }

        function checkIfUserIsLogged(tabId) {
            return isUserLogged()
                ? redirect(tabId)
                : saveTabIdToAssignInTheFuture(tabId);
        }

        function checkData() {
            const tabId = data?.createTab?.hashId;
            if (tabId) checkIfUserIsLogged(tabId);
        }

        checkData();
    }, [data]);

    useEffect(() => {
        if (error) {
            console.log(error); // TODO error
        }
    }, [error]);

    function create() {
        createTab({ variables: { content: '' } });
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
