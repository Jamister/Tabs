import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux HOC
import withStore from '../../store/withStore';

function Auxlr({ children }) {
	return <>{children}</>;
}

Auxlr.propTypes = {
	children: PropTypes.element.isRequired,
};

export default withStore(connect(null, null)(Auxlr));
