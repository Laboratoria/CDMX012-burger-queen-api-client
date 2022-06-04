import './Home.scss';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <button className='btn__home' onClick={() => navigate('/home')}>
      <img src='/assets/home-icon.svg' alt='icon edit' />
    </button>
  );
}
