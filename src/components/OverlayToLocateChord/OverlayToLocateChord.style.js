import styled from 'styled-components';
import { transition } from '../../styles/mixins';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1005;
	background: none;
	/* cursor: none; */
`;

const gradient_edges = 'rgba(255, 255, 255, 0)';
const gradient_center = 'rgba(37, 49, 64, 0.6)';

export const Cross = styled.div`
	position: absolute;
	top: ${props => props.y}px;
	left: ${props => props.x}px;
	width: 1px;
	height: 160px;
	${transition('all 0.1s ease')}
	z-index: 1006;
	background: ${gradient_center};
	background: -moz-linear-gradient(top, ${gradient_edges} 0%, ${gradient_center} 50%, ${gradient_edges} 100%);
	background: -webkit-gradient(left top, left bottom, color-stop(0%, ${gradient_edges}), color-stop(50%, ${gradient_center}), color-stop(100%, ${gradient_edges}));
	background: -webkit-linear-gradient(top, ${gradient_edges} 0%, ${gradient_center} 50%, ${gradient_edges} 100%);
	background: -o-linear-gradient(top, ${gradient_edges} 0%, ${gradient_center} 50%, ${gradient_edges} 100%);
	background: -ms-linear-gradient(top, ${gradient_edges} 0%, ${gradient_center} 50%, ${gradient_edges} 100%);
	background: linear-gradient(to bottom, ${gradient_edges} 0%, ${gradient_center} 50%, ${gradient_edges} 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0 );

	&:after {
		content: 'X';
		position: absolute;
		top: 68px;
		left: -5px;
		font-family: cursive;
		color: ${gradient_center};
	}
`;
