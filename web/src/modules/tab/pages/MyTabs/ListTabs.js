import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import * as s from './MyTabs.style';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

// Components
import Layout from 'modules/shared/components/Layout';
import CreateTabButton from 'modules/tab/components/CreateTabButton';

const ListTabs = ({ tabs }) => {
    const tuningView = (tuning) => tuning.split(',').join(' ');
    const emptyTabs = tabs.length === 0;

    return (
        <Layout>
            <Row gutter={44}>
                <Col span={24}>
                    <s.Header>Minhas tablaturas</s.Header>
                </Col>
                {tabs.map((tab) => (
                    <Col span={8} className="gutter-row" key={tab.hashId}>
                        <s.TabOnList>
                            <s.Title>{tab.title}</s.Title>
                            <s.OtherInfo>
                                <span>Artista:</span> {tab.artist}
                            </s.OtherInfo>
                            <s.OtherInfo>
                                <span>Afinação:</span> {tuningView(tab.tuning)}
                            </s.OtherInfo>
                            <s.OtherInfo>
                                <span>
                                    <FontAwesomeIcon icon={faGlobeAmericas} />
                                </span> Pública
                            </s.OtherInfo>
                            <s.Buttons>
                                <Link to={`/tab/${tab.hashId}`}>
                                    <Button>Editar</Button>
                                </Link>
                            </s.Buttons>
                        </s.TabOnList>
                    </Col>
                ))}
                {emptyTabs && (
                    <Col span={24}>
                        Você ainda não criou nenhuma tablatura.
                        <br /><br />
                        <CreateTabButton />
                    </Col>
                )}
            </Row>
        </Layout>
    );
};

ListTabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        hashId: PropTypes.string,
        title: PropTypes.string,
        artist: PropTypes.string,
        tuning: PropTypes.string,
        private: PropTypes.bool,
    })).isRequired,
};

export default ListTabs;
