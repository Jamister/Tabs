import React from 'react';
import { Row, Col } from 'antd';
// import * as s from './MyTabs.style';

// Components
import Layout from 'modules/shared/components/Layout';

const LoadingTabs = () => (
    <Layout>
        <Row gutter={44}>
            <Col span={24}><br /></Col>
            <Col span={24}>Loading...</Col>
        </Row>
    </Layout>
);

export default LoadingTabs;
