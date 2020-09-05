import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from 'styles/theme';
import { transition } from 'styles/mixins';

export const AccountMenu = styled.button`
    position: relative;
    float: right;
    height: ${theme.navbar_height}px;
    padding: 0 32px 0 45px;
    color: #fff;
    font-size: 15px;
    background: none;
    border: none;
    outline: none;
    ${transition('background 0.2s ease')};

    :hover {
        cursor: pointer;
        background: #324052;
    }

    > svg {
        position: absolute;
        top: 22px;
        right: 12px;
        font-size: 15px;
        color: #E6E9EC;

        :first-of-type {
            top: 19px;
            left: 12px;
            right: auto;
            font-size: 22px;
        }
    }
`;

export const SignInButton = styled(Link)`
    position: relative;
    float: right;
    height: ${theme.navbar_height}px;
    padding: 18px 32px 0 32px;
    color: #fff;
    font-size: 15px;
    background: none;
    border: none;
    outline: none;
    ${transition('background 0.2s ease')};

    :hover {
        color: #fff;
        cursor: pointer;
        background: #324052;
    }
`;

export const LinkPad = styled(Link)`
    padding: 6px 21px !important;
`;
