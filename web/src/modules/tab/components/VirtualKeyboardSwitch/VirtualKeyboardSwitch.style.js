import styled from 'styled-components';
import theme from 'styles/theme';

export const VirtualKeyboardWrapper = styled.div`
    position: relative;
    float: left;
    height: ${theme.subbar_height}px;
    padding: 11px 72px 0 52px;
    color: #212121;
    font-size: 15px;

    > span {
        color: #7C7C7C;
    }

    > svg {
        position: absolute;
        top: 13px;
        left: 25px;
        font-size: 18px;
        color: #A1ABB4;
    }

    > button {
        position: absolute;
        right: 20px;
    }
`;
