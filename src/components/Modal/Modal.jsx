import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    state = {};
    componentDidMount() {
        window.addEventListener('keydown', e => {
            this.handleKeydown(e);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', e => {
            this.handleKeydown(e);
        });
    }

    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };
    handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <div className="Overlay" onClick={this.handleBackDropClick}>
                <div className="Modal">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
