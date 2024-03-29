import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Button, message } from 'antd';

// Api
import { CREATE_TAB } from 'modules/tab/api';

// Utils
import isUserLogged from 'modules/user/utils/isUserLogged';
import tabDefaultValues from 'modules/tab/utils/tabDefaultValues';

const CreateTabButton = () => {
    const history = useHistory();
    const [createTab, { data, loading, error }] = useMutation(CREATE_TAB);

    useEffect(() => {
        function redirect(tabId) {
            history.push(`/tab/${tabId}`);
        }

        function saveTabIdToAssignInTheFuture(tabId) {
            const previousTabsToAssign = localStorage.getItem('tabsToAssign') || '';
            const tabsToAssign = previousTabsToAssign !== ''
                ? `${previousTabsToAssign},${tabId}`
                : tabId;
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
            const errorMessage = 'Desculpe, ocorreu um problema ao criar sua tab. Tente novamente.';
            message.error(errorMessage);
        }
    }, [error]);

    function create() {
        const variables = {
            tuning: tabDefaultValues.tuning.join(','),
            instrument: tabDefaultValues.instrument,
            content: tabDefaultValues.content,
        };
        createTab({ variables });
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
