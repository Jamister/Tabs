import styled from 'styled-components';
import { transition } from 'styles/mixins';

export const ArtistWrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 0 0 26px;
`;

export const Label = styled.div`
    color: #727b82;
    padding: 4px 1px 0;
`;

export const Input = styled.input`
    padding: 1px 5px;
    background: none;
    border: 1px solid transparent;
    color: #323232;
    font-weight: 500;
    font-size: 16px;
    ${transition('all 0.4s ease')};

    :hover,
    :focus,
    :active {
        border: 1px solid #c3c6ca;
        border-radius: 4px;
    }
`;
