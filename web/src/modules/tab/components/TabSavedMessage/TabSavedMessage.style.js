import styled, { css } from 'styled-components';

export const SavedMessage = styled.div`
    position: absolute;
    top: 17px;
    left: 1px;
    color: #aeb5b9;
    font-size: 12px;

    ${props => props.success && css`
        color: #78b9c5;
    `}
`;
