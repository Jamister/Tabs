import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as s from './Modal.style';

// Components
import Portal from '../Portal';

// Functions
import { lockBody } from '../../utils/lockBody';

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
            <Portal>
                <s.RevealOverlay>
                    <s.Reveal>
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
                    </s.Reveal>
                </s.RevealOverlay>
            </Portal>
        );
    }
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
};

export default Modal;
