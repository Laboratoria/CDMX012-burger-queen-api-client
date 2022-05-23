import React from 'react';
import ReactDOM from 'react-dom';
import './ErrorModal.css';
import errorIcon from '../../assets/errorIcon.png';

export const ErrorModal = ({ open, onClose }) => {

    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className='modal-error'>
                <button className="close-modal" onClick={onClose}> X </button>
                <img src={errorIcon} alt="error icon" className='error-icon'></img>
                <p className='txt-message'>Please verify your order :)</p>
            </div>
        </>,
        document.getElementById('portal')
    );
}



// export default function ProfileModal({ open, onClose }) {
//     if (!open) return null;

//     return ReactDOM.createPortal(
//         <>
//             <div className='modal-error'>
//                 <button className="close-modal" onClick={onClose}> X </button>
//                 <img src={errorIcon} alt="error icon" className='error-icon'></img>
//                 <p className='txt-message'>Please verify your order :)</p>
//             </div>
//         </>,
//         document.getElementById('portal')
//     );
// }
