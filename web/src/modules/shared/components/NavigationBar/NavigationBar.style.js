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

export const Menu = styled.ul`
    position: relative;
    float: left;
    height: ${theme.navbar_height}px;
    margin: 0;
    padding: 0 0 0 30px;
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
            padding: 18px 10px 0;
            font-size: 15px;
            color: #fff;
        }
    }
`;

export const Button = styled.div`
    position: relative;
    float: right;
    padding: 15px 0 0 45px;
`;
