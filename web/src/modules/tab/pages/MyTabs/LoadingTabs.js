import React from 'react';
import { Row, Col, Skeleton } from 'antd';
import * as s from './MyTabs.style';

// Components
import Layout from 'modules/shared/components/Layout';

const LoadingTabs = () => (
    <Layout>
        <Row gutter={44}>
            <Col span={24}>
                <s.Header>Minhas tablaturas</s.Header>
            </Col>
            <Col span={8} className="gutter-row">
                <s.TabOnList>
                    <Skeleton active />
                </s.TabOnList>
            </Col>
            <Col span={8} className="gutter-row">
                <s.TabOnList>
                    <Skeleton active />
                </s.TabOnList>
            </Col>
        </Row>
    </Layout>
);

export default LoadingTabs;
