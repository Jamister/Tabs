import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import CSSModules from 'react-css-modules';
import styles from './style.module.sass';

// Components
import ModalPortal from './ModalPortal';

// Functions
import { lockBody } from '../../functions/lockBody';

class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keyup', this.escClose);
		lockBody(true);
	}

	componentWillUnmount() {
		lockBody(false);
		window.removeEventListener('keyup', this.escClose);
	}

	escClose = (e) => {
		if (e.keyCode === 27) {
			this.props.closeModal();
		}
	}

	render() {
		return (
			<ModalPortal>
				<div className="reveal-overlay" styleName="reveal-overlay">
					<div className="reveal" data-reveal styleName="reveal">
						<button
							type="button"
							className="close-button"
							data-close
							aria-label="Close modal"
							onClick={this.props.closeModal}
						>
							<span aria-hidden="true">&times;</span>
						</button>
						{React.cloneElement(this.props.children)}
					</div>
				</div>
			</ModalPortal>
		);
	}
}

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired,
};

export default CSSModules(Modal, styles, { allowMultiple: true });
