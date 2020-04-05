import React from 'react';
import PropTypes from 'prop-types';

// CSS
import * as s from './Container.style';

const Container = ({ children, fluid }) => (
	<s.Container fluid={fluid}>
		{React.Children.map(children, (child) => <>{child}</>)}
	</s.Container>
);

Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	fluid: PropTypes.bool,
};

Container.defaultProps = {
	fluid: false,
};

export default Container;
