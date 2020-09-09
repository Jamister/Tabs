import styled from 'styled-components';

export const AnimatedTabWrapper = styled.div`
	display: inline-block;
	position: relative;
	width: 526px;
	height: 151px;
	margin: 85px 0 0 80px;
	background: url('/images/animated_tab.jpg');
	background-position: center;
	background-size: contain;
	vertical-align: middle;
	overflow: hidden;
`;

export const AnimatedNote = styled.div`
	position: absolute;
	top: ${props => props.x}px;
	left: ${props => props.y}px;
	width: 36px;
	height: 36px;
	padding: 7px 0 0;
	border: 1px solid #333;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #212121;
	text-align: center;
	z-index: 2;

    > span {
        padding: 0 4px 0 4px;
        background-color: #fff;
    }
`;

export const FixedNote = styled(AnimatedNote)`
	border: 1px solid transparent;
	z-index: 1;
`;
