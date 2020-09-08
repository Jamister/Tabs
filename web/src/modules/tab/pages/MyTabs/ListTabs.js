import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import * as s from './MyTabs.style';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

// Components
import Layout from 'modules/shared/components/Layout';

const ListTabs = ({ tabs }) => (
    <Layout>
        <Row gutter={44}>
            <Col span={24}><br /></Col>
            {tabs.map((tab) => (
                <Col span={8} className="gutter-row" key={tab.hashId}>
                    <s.TabOnList>
                        <s.Title>{tab.title}</s.Title>
                        <s.OtherInfo><span>Author:</span> {tab.author}</s.OtherInfo>
                        <s.OtherInfo><span>Tune:</span> {tab.tune}</s.OtherInfo>
                        <s.OtherInfo><span><FontAwesomeIcon icon={faGlobeAmericas} /></span> Pública</s.OtherInfo>
                        <s.Buttons>
                            <Button>Editar</Button>
                        </s.Buttons>
                    </s.TabOnList>
                </Col>
            ))}
        </Row>
    </Layout>
);

ListTabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        hashId: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        tune: PropTypes.string,
        tab: PropTypes.string,
        private: PropTypes.bool,
    })).isRequired,
};

export default ListTabs;
