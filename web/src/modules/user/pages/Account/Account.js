import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import * as s from './Account.style';

// Components
import Layout from 'modules/shared/components/Layout';

// Utils
import isUserLogged from 'modules/user/utils/isUserLogged';

const Account = ({ history }) => {
    useLayoutEffect(() => {
        function redirect() {
            history.push('/sign/in');
        }

        function checkAlreadyLogged() {
            if (!isUserLogged()) redirect();
        }

        checkAlreadyLogged();
    }, []);

    return (
        <Layout>
            <Row>
                <Col span={24}>
                    <s.Title>My account</s.Title>
                    TODO
                </Col>
            </Row>
        </Layout>
    );
};

Account.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default Account;
