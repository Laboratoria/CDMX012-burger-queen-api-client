import React from 'react';
import ReactDOM from 'react-dom';
import './ProfileModal.css';
import profilepic from '../../assets/Profile-pic-placeholder.png';
import logoutIcon from '../../assets/Log-out-icon.png';

export default function ProfileModal({ open, onClose, user, logOut }) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className='wrapper'/>
            <div className='modal'>
                <button className="close-modal" onClick={onClose}> X </button>
                <img src={profilepic} alt="user's profile pic" className='profile-pic'></img>
                {/* <p className='user-name'>{user.displayName}</p> */}
                <p className='user-email'>{user.email}</p>
                <button onClick={()=>{logOut()}} className='log-out-btn'>
                    Log out 
                    <img src={logoutIcon} alt='logout-icon' className='logout-icon'></img>
                </button>
            </div>
        </>,
        document.getElementById('portal')
    )
}
