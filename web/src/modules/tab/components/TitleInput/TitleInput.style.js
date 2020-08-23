import styled from 'styled-components';
import { transition } from 'styles/mixins';

export const Input = styled.input`
    margin: 36px 0 30px;
    background: none;
    border: 1px solid transparent;
    font-family: 'Source Serif Pro', serif;
    font-size: 36px;
    font-weight: 700;
    color: #323232;
    ${transition('all 0.4s ease')};

    :hover,
    :focus,
    :active {
        border: 1px solid #c3c6ca;
        border-radius: 4px;
    }
`;
