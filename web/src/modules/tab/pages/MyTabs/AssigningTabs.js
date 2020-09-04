import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql, useMutation } from '@apollo/client';
import { Col } from 'antd';
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
            setStage('FETCHING_TABS'); // REFACTOR
        }
    }, [data]);

    useEffect(() => {
        if (error) setStage('ERROR'); // REFACTOR
    }, [error]);

    return (
        <Layout>
            <Col span={24}>
                Assigning Tabs...
            </Col>
        </Layout>
    );
};

AssigningTabs.propTypes = {
    setStage: PropTypes.func.isRequired,
};

export default AssigningTabs;
