import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/Firebase';
import './LogOut.scss';

export default function LogOut() {
  const navigate = useNavigate();

  function logOut() {
    signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  }

  return (
    <button className='btn__logout' onClick={logOut}>
      <img src='/assets/logout-icon.svg' alt='iconLogOut' />
    </button>
  );
}
