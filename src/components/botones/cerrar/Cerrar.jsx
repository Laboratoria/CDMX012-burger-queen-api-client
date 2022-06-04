import './Cerrar.scss';

export default function Cerrar(props) {
  return (
    <button
      type='button'
      className='btn__close'
      onClick={() => {
        props.delete(false);
      }}
    >
      <img className='btn__img' src='/assets/close-icon.svg' alt='IconClose' />
    </button>
  );
}
