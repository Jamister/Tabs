import React from 'react';
import { useHistory } from 'react-router-dom';
import * as s from './SignOutButton.style';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SignOutButton = () => {
    const history = useHistory();

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

export default SignOutButton;
