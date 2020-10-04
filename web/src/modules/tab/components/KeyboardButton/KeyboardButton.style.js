import styled from 'styled-components';
import { boxShadow, transition } from 'styles/mixins';

export const KeyboardButton = styled.button`
    position: relative;
    height: 28px;
    width: ${props => props.widthValue};
    margin: .3em;
    padding: 0 10px;
    text-align: center;
    border: none;
    border-radius: 2px;
    justify-content: center;
    background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
    ${boxShadow('inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30,35,90,0.4)')}
    ${transition('all 0.2s ease')};

    &:hover {
        cursor: pointer;
        background: linear-gradient(-225deg, #dce2ea, #f8f8f8);
        ${boxShadow('inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 5px 1px rgba(30,35,90,0.4)')}
    }
`;
