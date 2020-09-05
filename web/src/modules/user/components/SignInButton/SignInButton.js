import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql, useMutation } from '@apollo/client';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as s from './SignInButton.style';

const ENTER = gql`
    mutation Enter(
        $token: String
        $externalId: String
        $name: String
        $email: String
        $imageUrl: String
    ) {
        enter(
            token: $token
            externalId: $externalId
            name: $name
            email: $email
            imageUrl: $imageUrl
        ) {
            token
        }
    }
`;

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

        clearLocalstorage();
    }, [error]);

    useEffect(() => {
        function redirect() {
            history.push('/me/tabs');
        }

        function checkData() {
            // TODO
            if (data) redirect();
        }

        checkData();
    }, [data]);

    useEffect(() => {
        function saveUserToDb(auth) {
            enter({
                variables: {
                    token: auth.token,
                    externalId: auth.user.external_id,
                    name: auth.user.name,
                    email: auth.user.email,
                    imageUrl: auth.user.image_url,
                },
            });
        }

        function saveUserToLocalstorage(auth) {
            localStorage.setItem('auth', JSON.stringify(auth));
            saveUserToDb(auth);
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
