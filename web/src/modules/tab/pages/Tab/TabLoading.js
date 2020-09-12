import React from 'react';
import { Row, Col } from 'antd';

// Components
import Layout from 'modules/shared/components/Layout';

const TabLoading = () => (
    <Layout include_actions_bar include_keytips>
        <Row>
            <Col span={24}>
                Carregando...
            </Col>
        </Row>
    </Layout>
);

export default TabLoading;
