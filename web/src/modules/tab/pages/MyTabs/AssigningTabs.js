import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql, useMutation } from '@apollo/client';
import { Row, Col } from 'antd';
import { loading_stages } from 'modules/tab/constants';
// import * as s from './MyTabs.style';

// Components
import Layout from 'modules/shared/components/Layout';

const ADD_TODO = gql`
    mutation AddTodo($type: String!) {
        addTodo(type: $type) {
            id
            type
        }
    }
`;

const AssigningTabs = ({ setStage }) => {
    const [addTodo, { data, error }] = useMutation(ADD_TODO);

    useEffect(() => {
        addTodo({ variables: { type: '' } });
    }, []);

    useEffect(() => {
        if (data) {
            setStage(loading_stages.FETCHING_TABS);
        }
    }, [data]);

    useEffect(() => {
        if (error) setStage(loading_stages.ERROR);
    }, [error]);

    return (
        <Layout>
            <Row>
                <Col span={24}>
                    Assigning Tabs...
                </Col>
            </Row>
        </Layout>
    );
};

AssigningTabs.propTypes = {
    setStage: PropTypes.func.isRequired,
};

export default AssigningTabs;
