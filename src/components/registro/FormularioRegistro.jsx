import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/RegisterUser';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, registerNewUser, userExist } from '../../firebase/Firebase.js';
import './FormularioRegistro.scss';

export default function FormularioRegistro(props) {
  let navigate = useNavigate();
  const { handleChange, values, errors, handleSubmit } = useForm(formRegister);
  console.log(values.name);
  console.log(values.type);
  console.log(values.phone);
  console.log(values.email);
  console.log(values.pass);

  async function formRegister() {
    const res = await createUserWithEmailAndPassword(auth, values.email, values.pass);
    try {
      await registerNewUser(
        auth.currentUser.uid,
        values.name,
        values.type,
        values.phone,
        values.email,
        values.pass
      );

      const registered = await userExist(auth.currentUser.uid);
      console.log(registered);
      if (registered && auth.currentUser.uid) {
        navigate('/registro');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className='container__formulario'>
      <button
        type='button'
        className='btn__close'
        onClick={() => {
          props.delete(false);
        }}
      >
        <img className='btn__img' src='/assets/close-icon.svg' alt='IconClose' />
      </button>
      <div className='form'>
        <h1 className='form__title'>{'registrar empleados'.toUpperCase()}</h1>
        <form action='' className='form__form' onSubmit={handleSubmit}>
          <div className='group'>
            <label htmlFor='name' className='group__label'>
              {'nombre'.toUpperCase()}
            </label>
            <input
              className='group__input'
              type='text'
              name='name'
              id='name'
              onChange={handleChange}
              placeholder='Jhon Doe'
              required
            />
          </div>
          <div className='group'>
            <label htmlFor='type' className='group__label'>
              {'puesto'.toUpperCase()}
            </label>
            <div className='group__group--radio'>
              <div className='group--radio'>
                <input
                  type='radio'
                  onChange={handleChange}
                  id='cocinero'
                  name='type'
                  value='cocinero'
                />
                <label className='radio__label' htmlFor='cocinero'>
                  {'cocinero'.toUpperCase()}
                </label>
              </div>
              <div className='group--radio'>
                <input
                  onChange={handleChange}
                  type='radio'
                  id='mesero'
                  name='type'
                  value='mesero'
                />
                <label className='radio__label' htmlFor='mesero'>
                  {'mesero'.toUpperCase()}
                </label>
              </div>
              <div className='group--radio'>
                <input
                  onChange={handleChange}
                  type='radio'
                  id='administrador'
                  name='type'
                  value='administrador'
                />
                <label className='radio__label' htmlFor='administrador'>
                  {'administrador'.toUpperCase()}
                </label>
              </div>
            </div>
          </div>
          <div className='group'>
            <label htmlFor='phone' className='group__label'>
              {'telefono'.toUpperCase()}
            </label>
            <input
              onChange={handleChange}
              className='group__input'
              type='text'
              name='phone'
              id='phone'
              placeholder='xx - xxxx - xxxx'
              required
            />
          </div>
          <div className='group'>
            <label htmlFor='email' className='group__label'>
              {'correo'.toUpperCase()}
            </label>
            <input
              className='group__input'
              type='text'
              name='email'
              id='email'
              onChange={handleChange}
              placeholder='jhondoe@burguerqueen.com'
              required
            />
          </div>
          <div className='group'>
            <label htmlFor='pass' className='group__label'>
              {'contraseña'.toUpperCase()}
            </label>
            <input
              className='group__input'
              type='password'
              name='pass'
              onChange={handleChange}
              id='pass'
              placeholder='Burguer1@queen'
              required
            />
          </div>
          <button className='btn--register'>{'registrar empleado'.toUpperCase()}</button>
        </form>
      </div>
    </section>
  );
}
