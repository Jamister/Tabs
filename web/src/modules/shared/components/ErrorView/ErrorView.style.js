import styled, { css } from 'styled-components';
import { boxShadow } from 'styles/mixins';

export const ErrorWrapper = styled.div`
    display: inline-block;
    width: 100%;
    margin: 40px auto 80px;
    text-align: center;

    > svg {
        margin: 0 0 20px;
		font-size: 90px;
		color: #cbced3;
    }
`;

export const KeyboardsWrapper = styled.div`
    display: inline-block;
    margin: 0 auto 80px;
    text-align: center;
`;

export const Keyboards = styled.div`
    display: inline-block;
    margin: 0 auto;
    padding: 40px 36px 0;
`;

export const KeyboardType = styled.div`
    position: relative;
    width: 100%;
    text-align: left;
    padding: 0 0 6px 0;
    color: #212121;
    font-size: 16px;
`;

export const KeyboardKeys = styled.div`
    position: relative;
    width: 100%;
    text-align: left;
`;

export const Key = styled.div`
    display: block;
    float: left;
    height: 29px;
    width: 40px;
    margin-right: .5em;
    padding: 3px 0 0 0;
    text-align: center;
    border-radius: 2px;
    justify-content: center;
    background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
    ${boxShadow('inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30,35,90,0.4)')}

    ${props => props.ctrl && css`
        width: 64px;
    `}
`;

export const KeyPlus = styled.div`
    display: block;
    float: left;
    padding: 4px 6px 0 1px;
`;
