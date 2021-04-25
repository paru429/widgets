import React from 'react'
import Modal from '../Modal';
import './ModalWidget.scss';

const ModalWidget = () => {
    return (
        <Modal>
            <div className="modal-widget">
                <div>Iam a modal!!</div>
            </div>
        </Modal>
    )
}

export default ModalWidget;