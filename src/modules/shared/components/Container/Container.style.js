import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 21px;
    text-align: left;

    ${props => props.fluid && css`
        width: 100%;
        max-width: 100%;
        padding: 0;
    `}
`;
