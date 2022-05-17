import React from 'react';
import ReactDOM from 'react-dom';
import './ProfileModal.css'

export default function ProfileModal({ open, children, onClose }) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className='wrapper'/>
            <div className='modal'>
                <button onClick={onClose}> X </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}
