import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 ${theme.container_side_padding}px;
    text-align: left;

    ${props => props.background !== '' && css`
        background: ${props.background};
    `}
`;
