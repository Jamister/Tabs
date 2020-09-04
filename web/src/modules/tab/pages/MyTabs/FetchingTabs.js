import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import { Col } from 'antd';
// import * as s from './MyTabs.style';

// Components
import Layout from 'modules/shared/components/Layout';

const GET_DOGS = gql`
    query GetDogs {
        dogs {
            id
            breed
        }
    }
`;

const FetchingTabs = ({ setStage, setTabs }) => {
    const { error, data } = useQuery(GET_DOGS);

    useEffect(() => {
        if (data) {
            setStage('DONE'); // REFACTOR
            setTabs(data);
        }
    }, [data]);

    useEffect(() => {
        if (error) setStage('ERROR'); // REFACTOR
    }, [error]);

    return (
        <Layout>
            <Col span={24}>
                Fetching Tabs...
            </Col>
        </Layout>
    );
};

FetchingTabs.propTypes = {
    setStage: PropTypes.func.isRequired,
    setTabs: PropTypes.func.isRequired,
};

export default FetchingTabs;
