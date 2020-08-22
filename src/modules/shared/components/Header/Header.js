import React from 'react';
import PropTypes from 'prop-types';
import * as s from './Header.style';

const Header = ({ children, level }) => {
    const text = React.Children.map(children, (child) => <>{child}</>);
    const headers = {
        h1: <h1>{text}</h1>,
        h2: <h2>{text}</h2>,
        h3: <h3>{text}</h3>,
        h4: <h4>{text}</h4>,
        h5: <h5>{text}</h5>,
        h6: <h6>{text}</h6>,
    };

    return (
        <s.Header>
            {headers[level] || headers.h1}
        </s.Header>
    );
};

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    level: PropTypes.string.isRequired,
};

export default Header;
