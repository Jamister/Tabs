import styled from 'styled-components';
import { transition } from 'styles/mixins';

export const PaddingWrapper = styled.div`
    position: relative;
    padding-left: 26px;
`;

export const TabOnList = styled.div`
    margin: 20px 0 16px;
    padding: 19px 30px 23px;
    border-radius: 8px;
    border: 1px solid #E3E6EA;
    ${transition('all 0.4s ease')};
`;

export const Title = styled.div`
    font-family: 'Source Serif Pro', serif;
    font-size: 21px;
    font-weight: 700;
    color: #323232;
`;

export const OtherInfo = styled.div`
    margin: 0 0 3px;
    color: #323232;

    > span {
        color: #A1ABB4;
    }
`;

export const Buttons = styled.div`
    padding: 12px 0 0;
`;
