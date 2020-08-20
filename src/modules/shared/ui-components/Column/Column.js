import React from 'react';
import PropTypes from 'prop-types';

// CSS
import * as s from './Column.style';

const Column = ({ children }) => (
    <s.Column>
        {React.Children.map(children, (child) => <>{child}</>)}
    </s.Column>
);

Column.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Column;
