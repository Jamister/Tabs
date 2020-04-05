import styled from 'styled-components';
import theme from '../../styles/global_theme';

const block_height = (theme.note_size * 5) + 1;

export const BlockEnd = styled.div`
	position: relative;
	float: left;
	width: 1px;
	height: ${block_height}px;
	margin: 11px 28px 64px 0;
	padding: 0;
	border-right: 1px solid #4a5056;
`;

export const PartEnd = styled.div`
	position: relative;
	float: left;
	width: 60px;
	height: 116px;
	margin: 11px 0 64px 0;
	border-left: 4px solid #6b6b6b;
	background: #fff;
`;

export const LayerOverLines = styled.div`
	position: absolute;
	top: -2px;
	left: 0;
	width: 69rem;
	height: 120px;
	background: #fff;
	z-index: 1;
`;
