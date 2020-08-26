import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as s from './SignInButton.style';

const SignInButton = ({ history }) => {
    useEffect(() => {
        function redirect() {
            history.push('/me/tabs');
        }

        function saveUserToLocalstorage(auth) {
            localStorage.setItem('auth', JSON.stringify(auth));
            redirect();
        }

        function handleResponse(googleUser) {
            const profile = googleUser.getBasicProfile();
            const auth_response = googleUser.getAuthResponse();
            const user = {
                external_id: profile.getId(),
                name: profile.getName(),
                image_url: profile.getImageUrl(),
                email: profile.getEmail(),
            };
            const token = auth_response.id_token;
            const auth = { token, user };
            saveUserToLocalstorage(auth);
        }

        function attachSignin(auth2) {
            const element = document.getElementById('customBtn');
            auth2.attachClickHandler((element), {}, (googleUser) => {
                handleResponse(googleUser);
            }, (error) => {
                // TODO
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(error, undefined, 2));
            });
        }

        function initGoogleSignIn() {
            window.gapi.load('auth2', () => {
                const auth2 = window.gapi.auth2.init({
                    client_id: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
                    cookiepolicy: 'single_host_origin',
                });
                attachSignin(auth2);
            });
        }

        function createScript() {
            const script = document.createElement('script');
            script.src = 'https://apis.google.com/js/api:client.js';
            script.onload = () => initGoogleSignIn();
            document.body.appendChild(script);
        }

        createScript();
    }, []);

    return (
        <s.GoogleButton type="button" id="customBtn">
            <s.SpanIcon />
            <s.SpanText>Sign in with Google</s.SpanText>
        </s.GoogleButton>
    );
};

SignInButton.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default SignInButton;
