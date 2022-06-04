import './Delete.scss';

export default function Delete() {
  return (
    <button className='btn__del'>
      <img src='/assets/trash-icon.svg' alt='icon' />
      <p className='btn__del--text'>ELIMINAR</p>
    </button>
  );
}
