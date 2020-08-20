import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux HOC
import withStore from '../../utils/redux/withStore';

const Auxlr = ({ children }) => <>{children}</>;

Auxlr.propTypes = {
    children: PropTypes.element.isRequired,
};

export default withStore(connect(null, null)(Auxlr));
