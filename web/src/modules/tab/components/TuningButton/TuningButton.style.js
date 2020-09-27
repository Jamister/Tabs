import styled from 'styled-components';
import theme from 'styles/theme';

export const TuningWrapper = styled.div`
    position: relative;
    float: left;
    height: ${theme.subbar_height}px;
    padding: 6px 32px 0 48px;
    color: #212121;
    font-size: 15px;

    > span {
        color: #7C7C7C;
    }

    > button {
        margin-left: 8px;
        padding: 4px 30px 4px 15px;

        > svg {
            position: absolute;
            top: 7px;
            right: 11px;
            font-size: 15px;
            color: #dadee2;
        }
    }

    > svg {
        position: absolute;
        top: 14px;
        left: 25px;
        font-size: 16px;
        color: #A1ABB4;
    }
`;

export const TuningPopoverWrapper = styled.div`
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
