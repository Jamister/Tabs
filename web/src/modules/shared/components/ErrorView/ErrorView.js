import React from 'react';
import { Row, Col } from 'antd';
import * as s from './ErrorView.style';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

// Components
import Layout from 'modules/shared/components/Layout';

const ErrorView = () => (
    <Layout>
        <Row>
            <Col span={24}>
                <s.ErrorWrapper>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    <h2>Desculpe, tivemos um problema!</h2>
                    <p>Atualize a página utilizando um dos comandos abaixo.</p>
                    <s.KeyboardsWrapper>
                        <s.Keyboards>
                            <s.KeyboardType>Windows:</s.KeyboardType>
                            <s.KeyboardKeys>
                                <s.Key ctrl>Ctrl</s.Key>
                                <s.KeyPlus>+</s.KeyPlus>
                                <s.Key>F5</s.Key>
                            </s.KeyboardKeys>
                        </s.Keyboards>
                        <s.Keyboards>
                            <s.KeyboardType>Mac OS:</s.KeyboardType>
                            <s.KeyboardKeys>
                                <s.Key ctrl>&#8984;</s.Key>
                                <s.KeyPlus>+</s.KeyPlus>
                                <s.Key>R</s.Key>
                            </s.KeyboardKeys>
                        </s.Keyboards>
                        <s.Keyboards>
                            <s.KeyboardType>Linux:</s.KeyboardType>
                            <s.KeyboardKeys>
                                <s.Key ctrl>Ctrl</s.Key>
                                <s.KeyPlus>+</s.KeyPlus>
                                <s.Key>F5</s.Key>
                            </s.KeyboardKeys>
                        </s.Keyboards>
                    </s.KeyboardsWrapper>
                </s.ErrorWrapper>
            </Col>
        </Row>
    </Layout>
);

export default ErrorView;
