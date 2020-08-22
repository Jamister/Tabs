import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import * as s from './Layout.style';

// Components
import NavigationBar from 'modules/shared/components/NavigationBar';
import ActionsSubBar from 'modules/tab/components/ActionsSubBar';
import Container from 'modules/shared/components/Container';

const Layout = ({ children, actionsBar }) => (
    <s.PageWrapper>
        <NavigationBar />
        {actionsBar ? <ActionsSubBar /> : null}
        <Container>
            <Row>
                {React.Children.map(children, (child) => <>{child}</>)}
            </Row>
        </Container>
    </s.PageWrapper>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    actionsBar: PropTypes.bool,
};

Layout.defaultProps = {
    actionsBar: false,
};

export default Layout;
