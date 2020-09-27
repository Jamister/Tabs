import styled from 'styled-components';
import theme from 'styles/theme';
import { transition } from 'styles/mixins';

export const TabBarWrapper = styled.div`
    position: relative;
    width: 100%;
    height: ${theme.navbar_height}px;
    background: linear-gradient(90deg, #202A37 50%, #253140 50%);
`;

export const Logo = styled.div`
    position: relative;
    float: left;
    height: ${theme.navbar_height}px;
    padding: 15px 53px 0 0;
    text-transform: uppercase;
    background: #202A37;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    border-right: 1px solid #0E1522;

    > svg {
        margin-right: 8px;
        font-size: 18px;
        font-weight: normal;
    }

    &:before {
        content: ' ';
        position: absolute;
        top: 0;
        left: -${theme.container_side_padding}px;
        width: ${theme.container_side_padding}px;
        height: ${theme.navbar_height}px;
        background: #202a37;
    }
`;

export const Menu = styled.ul`
    position: relative;
    float: left;
    height: ${theme.navbar_height}px;
    margin: 0;
    padding: 0 0 0 14px;
    list-style: none;
    text-align: left;
    border-left: 1px solid #36414F;

    > li {
        display: inline-block;
        position: relative;
        width: auto;
        margin: 0 20px;

        > a {
            display: block;
            height: ${theme.navbar_height}px;
            padding: 18px 20px 0;
            font-size: 15px;
            color: #fff;
            ${transition('background 0.2s ease')};

            :hover {
                cursor: pointer;
                background: #324052;
            }
        }
    }
`;

export const Button = styled.div`
    position: relative;
    float: right;
    padding: 15px 0 0 45px;
`;
