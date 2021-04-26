import React, {useState} from 'react'
import Modal from '../Modal';
import './ModalWidget.scss';

const ModalWidget = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <React.Fragment>
            <button className="modal-widget__button" onClick={() => setShowModal(true)}>Click Me</button>
            <Modal showModal={showModal} onClose={() => setShowModal(false)}>
                <div className="modal-widget">
                    <div>Iam a modal content!!</div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalWidget;