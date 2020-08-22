import styled from 'styled-components';
import theme from 'styles/theme';

export const TabBarWrapper = styled.div`
    position: relative;
    width: 100%;
    height: ${theme.navbar_height}px;
    /* background: #253140; */
    background: linear-gradient(90deg, #202A37 50%, #253140 50%);
`;

export const Logo = styled.div`
    position: relative;
    float: left;
    height: ${theme.navbar_height}px;
    padding: 15px 60px 0 0;
    text-transform: uppercase;
    background: #202A37;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    border-right: 1px solid #0E1522;
`;

export const Menu = styled.div`
    position: relative;
    float: left;
    height: ${theme.navbar_height}px;
    padding: 19px 0 0 60px;
    color: #fff;
    font-size: 15px;
    border-left: 1px solid #36414F;
`;

export const AccountMenu = styled.div`
    position: relative;
    float: right;
    height: ${theme.navbar_height}px;
    padding: 19px 0 0 0;
    color: #fff;
    font-size: 15px;
`;

export const Button = styled.div`
    position: relative;
    float: right;
    padding: 15px 0 0 50px;
`;
