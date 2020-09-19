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
import SavingEditions from './SavingEditions';

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
    }, [data]);

    if (loading) return <TabLoading />;
    if (error) return `Error! ${error.message}`; // TODO

    return (
        <Layout include_actions_bar include_keytips>
            <Row>
                <Col span={24}>
                    <TabHeaderInfo />
                    <TabView />
                    <SavingEditions />
                    <p><br /></p>
                    <p><br /></p>
                    <p><br /></p>
                    <p><br /></p>
                    <p><br /></p>
                </Col>
            </Row>
        </Layout>
    );
};

export default Tab;
