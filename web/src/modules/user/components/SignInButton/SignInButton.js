import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as s from './SignInButton.style';

// Api
import { ENTER } from 'modules/user/api';

const SignInButton = ({ history }) => {
    const [enter, { data, loading, error }] = useMutation(ENTER);

    useEffect(() => {
        function displayError() {
            // TODO error
        }

        function clearLocalstorage() {
            localStorage.setItem('auth', JSON.stringify({}));
            displayError();
        }

        function checkError() {
            if (error) clearLocalstorage();
        }

        checkError();
    }, [error]);

    useEffect(() => {
        function redirect() {
            history.push('/me/tabs');
        }

        function saveUserToLocalstorage(token, user) {
            const auth = { token, user };
            localStorage.setItem('auth', JSON.stringify(auth));
            redirect();
        }

        function checkData() {
            const token = data?.enter?.token || '';
            const user = data?.enter?.user || {};
            const isValidData = token !== '' && user.email !== undefined;
            if (isValidData) saveUserToLocalstorage(token, user);
        }

        checkData();
    }, [data]);

    useEffect(() => {
        function saveUserToDb(token) {
            enter({
                variables: { token },
            });
        }

        function handleResponse(googleUser) {
            const authResponse = googleUser.getAuthResponse();
            const token = authResponse.id_token;
            saveUserToDb(token);
        }

        function attachSignin(auth2) {
            const element = document.getElementById('customBtn');
            auth2.attachClickHandler((element), {}, (googleUser) => {
                handleResponse(googleUser);
            }, (err) => {
                // TODO
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(err, undefined, 2));
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

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    if (loading) {
        return (
            <s.GoogleButton type="button" isLoading>
                <Spin indicator={antIcon} />
                <s.SpanText>Sign in with Google</s.SpanText>
            </s.GoogleButton>
        );
    }

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
