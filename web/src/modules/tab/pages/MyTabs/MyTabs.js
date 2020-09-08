import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';

// Api
import { ASSIGN_TABS, MY_TABS } from 'modules/tab/api';

// Components
import LoadingTabs from './LoadingTabs';
import ListTabs from './ListTabs';

const MyTabs = () => {
    const [tabs, setTabs] = useState([]);
    const [loadTabs, query] = useLazyQuery(MY_TABS);
    const [assignTabs, mutation] = useMutation(ASSIGN_TABS);

    useEffect(() => {
        const hasError = mutation.error || query.error;
        if (hasError) console.log('error'); // TODO
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
    return isLoading
        ? <LoadingTabs />
        : <ListTabs tabs={tabs} />;
};

export default MyTabs;
