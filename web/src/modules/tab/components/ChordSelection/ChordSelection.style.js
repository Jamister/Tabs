import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const Chord = styled.button`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: ${theme.chord_height}px;
	background: none;
	outline: none;
	cursor: pointer;
	border: transparent 1px solid;
	border-radius: 0;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-weight: 500;
	color: #212121;
	z-index: 11;

	&:hover {
		border: #666 1px solid;

		> span {
			background-color: lighten(#fff, 4%);
		}
	}

	${props => props.is_selected && css`
		border: #988c69 1px solid;

		> span {
			background-color: lighten(#fff, 4%);
		}
	`}
`;
