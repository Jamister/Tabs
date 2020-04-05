import styled, { css } from 'styled-components';
import theme from '../../styles/global_theme';

export const Note = styled.button`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: ${theme.note_height}px;
	outline: none;
	cursor: pointer;
	border: transparent 1px solid;
	border-radius: 0;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-weight: 500;
	color: #212121;
	z-index: 10;

	${props => props.line === 1 && css`
		top: -6px;
	`}

	${props => props.line === 2 && css`
		top: 17px;
	`}

	${props => props.line === 3 && css`
		top: 40px;
	`}

	${props => props.line === 4 && css`
		top: 62px;
	`}

	${props => props.line === 5 && css`
		top: 86px;
	`}

	${props => props.line === 6 && css`
		top: 108px;
	`}

	> span {
		padding: 0 4px 0 4px;
		background-color: #fff;
	}

	&:hover {
		border: #666 1px solid;

		> span {
			background-color: lighten(#fff, 4%);
		}
	}

	${props => props.selected && css`
		border: #988c69 1px solid;

		> span {
			background-color: lighten(#fff, 4%);
		}
	`}
`;
