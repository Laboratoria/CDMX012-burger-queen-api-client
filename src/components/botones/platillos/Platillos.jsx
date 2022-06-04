import './Platillos.scss';
import { useNavigate } from 'react-router-dom';

export default function Platillos() {
  const navigate = useNavigate();
  return (
    <button className='btn__platillos' onClick={() => navigate('/platillos')}>
      <img src='/assets/platillo-icon.svg' alt='icon platillo' />
    </button>
  );
}
