import logo from '../../assets/BQ logo sin fondo.png';
import notificationIcon from '../../assets/Notification.png';
import profileIcon from '../../assets/Profile.png';
import ProfileModal from '../screenComponents/ProfileModal/ProfileModal';
import { useState } from 'react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='header'>
            <img src={logo} alt="burger queen logo" className='bq-logo-header'></img>
            <img src={notificationIcon} alt="notification icon" className='icon'></img>
            <img src={profileIcon} alt="profile icon"className='icon' onClick={() => setIsOpen(true)}></img>

            <ProfileModal open={isOpen} onClose={() => setIsOpen(false)}>
                Text
            </ProfileModal>
        </header>
    );
}
