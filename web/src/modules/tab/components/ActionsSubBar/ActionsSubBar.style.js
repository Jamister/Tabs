import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const SubBarWrapper = styled.div`
    position: relative;
    width: 100%;
    height: ${theme.subbar_height}px;
    background: #EFF0F2;
    border-bottom: 1px solid #E2E6ED;

    ${props => props.fixed && css`
        position: fixed;
        top: 0;
        z-index: 12;
    `}
`;

export const SubBarBackspace = styled.div`
    display: none;
    position: relative;
    width: 100%;
    height: ${theme.subbar_height}px;

    ${props => props.visible && css`
        display: block;
    `}
`;

export const SubBarDivision = styled.div`
    position: relative;
    float: left;
    width: 2px;
    height: ${theme.subbar_height}px;
    background: #FAFAFB;
    border-left: 1px solid #E1E2E4;
`;
