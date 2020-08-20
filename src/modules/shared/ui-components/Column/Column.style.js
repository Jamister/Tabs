import styled, { css } from 'styled-components';

export const Column = styled.div`
    flex-basis: 100%;
    padding: 15px;

    ${props => props.percent && css`
        flex: ${props.percent / 10};
    `}

    @media screen and (min-width: 800px) {
        flex: 1;
    }
`;
