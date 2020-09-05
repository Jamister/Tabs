import React from 'react';
import PropTypes from 'prop-types';
import * as s from './Layout.style';

// Components
import NavigationBar from 'modules/shared/components/NavigationBar';
import Container from 'modules/shared/components/Container';
import ActionsSubBar from 'modules/tab/components/ActionsSubBar';
import KeyboardTipsBar from 'modules/tab/components/KeyboardTipsBar';

const Layout = ({
    children,
    include_actions_bar,
    include_keytips,
}) => (
    <s.PageWrapper>
        <NavigationBar />
        {include_actions_bar ? <ActionsSubBar /> : null}
        <Container>
            {React.Children.map(children, (child) => <>{child}</>)}
        </Container>
        {include_keytips ? <KeyboardTipsBar /> : null}
    </s.PageWrapper>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    include_actions_bar: PropTypes.bool,
    include_keytips: PropTypes.bool,
};

Layout.defaultProps = {
    include_actions_bar: false,
    include_keytips: false,
};

export default Layout;
