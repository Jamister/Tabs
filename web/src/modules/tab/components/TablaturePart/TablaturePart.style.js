import styled from 'styled-components';
import theme from 'styles/theme';

export const PartWrapper = styled.div`
	position: relative;
	float: left;
	width: 100%;
`;

export const Part = styled.div`
	position: relative;
	float: left;
	width: 100%;
	padding-left: 28px;
	background-image: linear-gradient(to bottom, #DADBDD 60%, rgba(255, 255, 255, 0) 0%), linear-gradient(to bottom, #DADBDD 60%, rgba(255, 255, 255, 0) 0%), url('/images/background-lines.jpg');
	background-position: 0 12px, 100% 12px, top;
	background-size: 1px 191px, 1px 191px, auto;
	background-repeat: repeat-y, repeat-y, repeat;
	overflow: hidden;
`;

export const PartStart = styled.div`
    position: absolute;
	top: ${(theme.note_size / 2) - 1}px;
    left: 0;
    width: 8px;
    height: ${(theme.note_size * 5) + 1}px;
    border-left: 4px solid #303030;
    border-right: 1px solid #bfc4c7;
    z-index: 1;
`;
