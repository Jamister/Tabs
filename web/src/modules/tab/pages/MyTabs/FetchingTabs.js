import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import { Row, Col } from 'antd';
import { loading_stages } from 'modules/tab/constants';
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
            setStage(loading_stages.DONE);
            setTabs(data);
        }
    }, [data]);

    useEffect(() => {
        if (error) setStage(loading_stages.ERROR);
    }, [error]);

    return (
        <Layout>
            <Row>
                <Col span={24}>
                    Fetching Tabs...
                </Col>
            </Row>
        </Layout>
    );
};

FetchingTabs.propTypes = {
    setStage: PropTypes.func.isRequired,
    setTabs: PropTypes.func.isRequired,
};

export default FetchingTabs;
