import React from 'react';
import PropTypes from 'prop-types';

// CSS
import * as s from './Row.style';

const Row = ({ children }) => (
    <s.Row>
        {React.Children.map(children, (child) => <>{child}</>)}
    </s.Row>
);

Row.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Row;
