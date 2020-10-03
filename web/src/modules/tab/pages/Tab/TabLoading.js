import React from 'react';
import { Row, Col, Skeleton } from 'antd';

// Components
import Layout from 'modules/shared/components/Layout';

const TabLoading = () => (
    <Layout>
        <Row>
            <Col span={24}>
                <p><br /></p>
            </Col>
            <Col span={24}>
                <Skeleton active />
            </Col>
        </Row>
    </Layout>
);

export default TabLoading;
