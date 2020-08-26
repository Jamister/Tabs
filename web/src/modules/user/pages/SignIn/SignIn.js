import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
// import * as s from './SignIn.style';

// Components
import Layout from 'modules/shared/components/Layout';
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
            <Col span={24}>
                <SignInButton history={history} />
            </Col>
        </Layout>
    );
};

SignIn.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default SignIn;
