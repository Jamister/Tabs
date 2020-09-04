import React, { useState, useEffect } from 'react';

// Components
import AssigningTabs from './AssigningTabs';
import FetchingTabs from './FetchingTabs';
import ListTabs from './ListTabs';

const loading_stages = {
    TO_START: 'TO_START',
    ASSIGNING_TABS: 'ASSIGNING_TABS',
    FETCHING_TABS: 'FETCHING_TABS',
    DONE: 'DONE',
    ERROR: 'ERROR',
};

const MyTabs = () => {
    const [stage, setStage] = useState(loading_stages.TO_START);
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        function fetchTabs() {
            setStage(loading_stages.FETCHING_TABS);
        }

        function assignTabs() {
            setStage(loading_stages.ASSIGNING_TABS);
        }

        function checkTabsToAssign() {
            const tabsToAssign = '1,2,3' || ''; // TODO get from localstorage
            const hasTabs = tabsToAssign !== '';
            return hasTabs
                ? assignTabs()
                : fetchTabs();
        }

        checkTabsToAssign();
    }, []);

    const comps = {
        TO_START: <div />,
        ASSIGNING_TABS: <AssigningTabs setStage={setStage} />,
        FETCHING_TABS: <FetchingTabs setStage={setStage} setTabs={setTabs} />,
        DONE: <ListTabs tabs={tabs} />,
        ERROR: <div>error</div>,
    };

    return comps[stage] || comps.TO_START;
};

export default MyTabs;
