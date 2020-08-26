import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as s from './SignOutButton.style';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SignOutButton = ({ history }) => {
    function redirect() {
        history.push('/');
    }

    function clearLocalstorage() {
        localStorage.setItem('auth', '');
        redirect();
    }

    function disconnect(e) {
        e.preventDefault();
        clearLocalstorage();
    }

    return (
        <s.LinkPad to="#" onClick={disconnect}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
        </s.LinkPad>
    );
};

SignOutButton.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default withRouter(SignOutButton);
