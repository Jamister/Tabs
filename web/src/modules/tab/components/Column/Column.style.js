import styled from 'styled-components';
import theme from 'styles/theme';

export const Column = styled.div`
    position: relative;
    float: left;
    width: auto;
    min-width: ${theme.column_width}px;
    height: 191px;
    padding: 0;
`;
