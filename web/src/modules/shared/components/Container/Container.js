import React from 'react';
import PropTypes from 'prop-types';

// CSS
import * as s from './Container.style';

const Container = ({ children, background }) => (
    <s.Container background={background}>
        {React.Children.map(children, (child) => <>{child}</>)}
    </s.Container>
);

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    background: PropTypes.string,
};

Container.defaultProps = {
    background: '',
};

export default Container;
