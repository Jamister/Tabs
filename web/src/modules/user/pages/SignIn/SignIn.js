import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import * as s from './SignIn.style';

// Components
import Layout from 'modules/shared/components/Layout';
import AnimatedTab from 'modules/user/components/AnimatedTab';
import SignInButton from 'modules/user/components/SignInButton';

const SignIn = ({ history }) => {
    useEffect(() => {
        function redirect() {
            history.push('/me/tabs');
        }

        function checkAlreadyLogged() {
            const isLogged = false;
            if (isLogged) redirect();
        }

        checkAlreadyLogged();
    }, [history]);

    return (
        <Layout>
            <Row>
                <Col span={10}>
                    <s.Title>Crie suas tablaturas facilmente</s.Title>
                    <s.Subtitle>Use o teclado para escrever suas tablaturas rapidamente, salve ou exporte em formato e texto</s.Subtitle>
                    <SignInButton history={history} />
                </Col>
                <Col span={14}>
                    <AnimatedTab />
                </Col>
            </Row>
        </Layout>
    );
};

SignIn.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default SignIn;
