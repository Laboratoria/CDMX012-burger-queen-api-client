import './Agregar.scss';

export default function Agregar(props) {
  return (
    <button
      className='btn__button'
      onClick={() => {
        props.delete(true);
      }}
    >
      <p className='btn__title'>{'Agregar empleado'.toUpperCase()}</p>
      <img className='btn_img' src='/assets/add-employe.svg' alt='iconAdd' />
    </button>
  );
}
