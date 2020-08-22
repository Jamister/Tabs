import styled from 'styled-components';
import theme from 'styles/theme';

export const TuneNote = styled.div`
    position: absolute;
    top: 0;
    left: -26px;
    width: auto;
    height: ${theme.note_height}px;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #656a6d;
    z-index: 10;

    &:nth-child(1) {
        top: 1px;
    }

    &:nth-child(2) {
        top: 23px;
    }

    &:nth-child(3) {
        top: 46px;
    }

    &:nth-child(4) {
        top: 69px;
    }

    &:nth-child(5) {
        top: 91px;
    }

    &:nth-child(6) {
        top: 113px;
    }
`;
