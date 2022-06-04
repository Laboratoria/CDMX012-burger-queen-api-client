import './Empleados.scss';
import { useNavigate } from 'react-router-dom';

export default function Empleados() {
  const navigate = useNavigate();
  return (
    <button className='btn__empleado' onClick={() => navigate('/registro')}>
      <img src='/assets/userCircle-icon.svg' alt='icon edit' />
    </button>
  );
}
