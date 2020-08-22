import React from 'react';
import PropTypes from 'prop-types';

// CSS
import * as s from './Container.style';

const Container = ({ children }) => (
    <s.Container>
        {React.Children.map(children, (child) => <>{child}</>)}
    </s.Container>
);

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Container;
