import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({children, showModal, onClose}) => {
    return (
        showModal && ReactDOM.createPortal(
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-children" onClick={(event) => event.stopPropagation()}>
                    <div className="modal-children__close" onClick={onClose}>x</div>
                    {children}
                </div>
            </div>,
            document.querySelector('#modal-root')
        )
    );
};

export default Modal;