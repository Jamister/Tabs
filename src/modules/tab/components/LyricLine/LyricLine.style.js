import styled from 'styled-components';
// import theme from '../../styles/global_theme';

export const LineWrapper = styled.div`
    position: relative;
    float: left;
    width: 100%;

    > input {
        padding-left: 0;
        border-top: none;
        border-left: none;
        border-right: none;
        border-color: #dadbdd;
        box-shadow: none;
        border-radius: 0;
        font-size: 16px;
        

        &:hover,
        &:active,
        &:focus,
        &:active:hover,
        &:active:focus {
            border-top: none;
            border-left: none;
            border-right: none;
            outline: none;
            box-shadow: none;
        }
    }
`;
