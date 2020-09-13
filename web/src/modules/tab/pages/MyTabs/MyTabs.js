import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

// Api
import { ASSIGN_TABS, MY_TABS } from 'modules/tab/api';

// Components
import LoadingTabs from './LoadingTabs';
import ListTabs from './ListTabs';
import ErrorView from 'modules/shared/components/ErrorView';

// Utils
import { isError403, clearUserAuth } from 'modules/user/utils/isError403';
/* eslint-disable */
const MyTabs = () => {
    const history = useHistory();
    const [tabs, setTabs] = useState([]);
    const [loadTabs, query] = useLazyQuery(MY_TABS);
    const [assignTabs, mutation] = useMutation(ASSIGN_TABS);

    useEffect(() => {
        const error = mutation.error || query.error;
        if (error) {
            const userNotLogged = isError403(error);
            if (userNotLogged) {
                clearUserAuth();
                history.push('/sign/in');
            }
        }
    }, [mutation.error, query.error]);

    useEffect(() => {
        const data = mutation.data || query.data;
        const hasData = data !== undefined;
        if (hasData) {
            setTabs(data.myTabs);
        }
    }, [mutation.data, query.data]);

    useLayoutEffect(() => {
        function checkTabsToAssign() {
            const tabsToAssign = localStorage.getItem('tabsToAssign') || '';
            const hasTabs = tabsToAssign !== '';
            return hasTabs
                ? assignTabs({ variables: { tabsIds: tabsToAssign } })
                : loadTabs();
        }

        checkTabsToAssign();
    }, []);

    const isLoading = mutation.loading || query.loading;
    const hasError = mutation.error || query.error;
    if (isLoading) return <LoadingTabs />;
    if (hasError) return <ErrorView />;

    return <ListTabs tabs={tabs} />;
};

export default MyTabs;
