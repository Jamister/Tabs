import styled, { css } from 'styled-components';
import { transition } from 'styles/mixins';

export const GoogleButton = styled.button`
	display: inline-block;
	width: 200px;
	height: 42px;
	margin: 50px auto;
	background: white;
	color: #444;
	border-radius: 5px;
	border: none;
	box-shadow: 0 1px 2px 0 rgba(128, 128, 128, 0.6);
	white-space: nowrap;
	${transition('all 0.2s ease')};

	${props => props.isLoading && css`
		opacity: 0.7;
	`}

	:hover {
		cursor: pointer;
		box-shadow: 0 1px 6px 0 rgba(128, 128, 128, 0.54);
	}
`;

export const SpanIcon = styled.span`
	// TODO
	background: url('https://developers-dot-devsite-v2-prod.appspot.com/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;
	background-size: contain;
	display: inline-block;
	vertical-align: middle;
	width: 32px;
	height: 32px;
`;

export const SpanText = styled.span`
	display: inline-block;
	vertical-align: middle;
	padding-left: 12px;
	padding-right: 12px;
	font-size: 14px;
	font-weight: bold;
`;
