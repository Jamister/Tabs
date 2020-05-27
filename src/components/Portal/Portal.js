import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

const Portal = ({ children }) => {
	const el = document.createElement('div');

	useEffect(() => {
		modalRoot.appendChild(el);
		return () => {
			modalRoot.removeChild(el);
		};
	}, []);

	return ReactDOM.createPortal(children, el);
};

Portal.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Portal;
