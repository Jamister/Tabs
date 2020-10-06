import styled, { css } from 'styled-components';
import { boxShadow } from 'styles/mixins';

export const TipsBarWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0%;
    width: 100%;
    height: 50px;
    padding: 12px 0 0;
    background: #fff;
    ${boxShadow('0 -1px 21px rgba(0, 0, 0, 0.07)')}
    z-index: 100;
`;

export const Key = styled.div`
    position: relative;
    float: left;
    height: 23px;
    width: 26px;
    margin-right: .5em;
    padding: 3px 0 0 0;
    text-align: center;
    border-radius: 2px;
    justify-content: center;
    background: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
    ${boxShadow('inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30,35,90,0.4)')}

    > svg {
        opacity: 0.7;
    }

    ${props => props.plusKey && css`
        padding: 0;
        color: #7e7f81;
    `}

    ${props => props.minusKey && css`
        padding: 0;
        color: #7e7f81;
    `}
`;

export const Subtitle = styled.div`
    position: relative;
    float: left;
    padding: 3px 55px 0 0;
    font-size: 13px;
    color: #949a9e;

    ${props => props.first && css`
        padding: 3px 20px 0 0;
        color: #616365;
    `}
`;
