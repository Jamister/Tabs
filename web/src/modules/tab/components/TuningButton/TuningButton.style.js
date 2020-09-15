import styled from 'styled-components';
import theme from 'styles/theme';
import { transition } from 'styles/mixins';

export const TuningButton = styled.button`
    position: relative;
    float: left;
    height: ${theme.subbar_height}px;
    padding: 0 42px 0 48px;
    color: #212121;
    font-size: 15px;
    background: none;
    border: none;
    outline: none;
    ${transition('background 0.2s ease')};

    :hover {
        cursor: pointer;
        background: #e5eaec;
    }

    > span {
        color: #7C7C7C;
    }

    > svg {
        position: absolute;
        top: 14px;
        right: 21px;
        font-size: 15px;
        color: #A1ABB4;

        :first-of-type {
            top: 14px;
            left: 25px;
            right: auto;
            font-size: 16px;
        }
    }
`;

export const TuningWrapper = styled.div`
    padding: 6px 0px;
`;

export const TuningRow = styled.div`
    display: flex;
    position: relative;
    padding: 4px 16px 4px 17px;
    color: #212121;

    > input {
        flex: 1;
        width: 48px;
    }
`;

export const LineNumber = styled.div`
    display: inline-block;
    padding: 4px 16px 0 0;
`;
