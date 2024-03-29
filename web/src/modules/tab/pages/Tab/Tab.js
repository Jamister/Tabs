import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import * as actions from 'modules/tab/store/actions';

// Api
import { GET_TAB } from 'modules/tab/api';

// Components
import TabView from './TabView';
import TabLoading from './TabLoading';
import Layout from 'modules/shared/components/Layout';
import TabHeaderInfo from 'modules/tab/components/TabHeaderInfo';
import SavingEditions from 'modules/tab/components/SavingEditions';
import ErrorView from 'modules/shared/components/ErrorView';

const Tab = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_TAB, {
        variables: { tabId: id },
    });

    useEffect(() => {
        if (data) {
            dispatch(actions.loadTabIntoStore({ payload: data?.tab }));
        }

        return () => {
            dispatch(actions.clearTabValues());
        };
    }, [data]);

    if (loading) return <TabLoading />;
    if (error) return <ErrorView />;

    return (
        <Layout include_actions_bar include_keytips>
            <Row>
                <Col span={24}>
                    <TabHeaderInfo />
                    <TabView />
                    <SavingEditions />
                </Col>
            </Row>
        </Layout>
    );
};

export default Tab;
