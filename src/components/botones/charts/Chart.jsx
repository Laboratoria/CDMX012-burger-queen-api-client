import './Chart.scss';
import { useNavigate } from 'react-router-dom';

export default function Chart() {
  const navigate = useNavigate();
  return (
    <button className='btn__chart' onClick={() => navigate('/informacion-pedidos')}>
      <img src='/assets/charts.svg' alt='icon platillo' />
    </button>
  );
}
