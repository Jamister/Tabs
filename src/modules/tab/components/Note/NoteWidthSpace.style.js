import styled, { css } from 'styled-components';
import theme from 'styles/global_theme';

export const WidthSpace = styled.div`
    position: relative;
    width: 100%;
    height: 1px;

    ${props => props.size === 0 && css`
        width: 0;
    `}

    ${props => props.size === 1 && css`
        width: ${theme.column_width}px;
    `}

    ${props => props.size === 2 && css`
        width: ${theme.column_width + 8}px;
    `}

    ${props => props.size === 3 && css`
        width: ${theme.column_width + 16}px;
    `}

    ${props => props.size === 4 && css`
        width: ${theme.column_width + 24}px;
    `}

    ${props => props.size === 5 && css`
        width: ${theme.column_width + 33}px;
    `}

    ${props => props.size === 6 && css`
        width: ${theme.column_width + 41}px;
    `}

    ${props => props.size === 7 && css`
        width: ${theme.column_width + 49}px;
    `}

    ${props => props.size === 8 && css`
        width: ${theme.column_width + 58}px;
    `}
`;
