import { useState } from 'react'

const Modal = ({ children, title }) => {
    const [show, setShow] = useState(true)
    const close = () => {
        setShow(false)
    }
    return (
        <div className={`modal-container ${show ? 'show' : ''}`}>
            <div className={`modal`}>
                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>
                    <div className="modal-header-close" onClick={() => close()}>
                        <span aria-hidden="true">×</span>
                    </div>
                </div>
                <div className="modal-content">{children}</div>
                <div className="modal-footer">
                    <div className="modal-footer-close button" onClick={() => close()}>
                        <span>Sulje</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
