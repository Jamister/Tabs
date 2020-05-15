import styled from 'styled-components';
import theme from '../../styles/global_theme';

export const Column = styled.button`
	position: relative;
	float: left;
	width: auto;
	min-width: ${theme.column_width}px;
	height: 191px;
	padding: 0;
`;
