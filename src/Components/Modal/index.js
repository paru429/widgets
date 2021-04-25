import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({children}) => {
    return (
        ReactDOM.render(
            <div className="modal-overlay" onClick={() => {window.location.href = '/'}}>
                <div className="modal-children" onClick={(event) => event.stopPropagation()}>
                    <div className="modal-children__close" onClick={() => {window.location.href = '/'}}>x</div>
                    {children}
                </div>
            </div>,
            document.querySelector('#modal-root')
        )
    );
};

export default Modal;