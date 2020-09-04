import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
// import * as s from './MyTabs.style';

// Components
import Layout from 'modules/shared/components/Layout';

const ListTabs = ({ tabs }) => (
    <Layout>
        {tabs.map((tab) => (
            <Col span={24}>
                <div key={tab.hashId}>{tab.title}</div>
            </Col>
        ))}
    </Layout>
);

ListTabs.propTypes = {
    tabs: PropTypes.arrayOf({
        hashId: PropTypes.string,
        title: PropTypes.string,
    }).isRequired,
};

export default ListTabs;
