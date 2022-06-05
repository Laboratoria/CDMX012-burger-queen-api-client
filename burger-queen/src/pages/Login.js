import '../styles/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Lib/firebase-keys'
import bannerLoginHamb from '../Assets/Images/bannerLogIn.png'
import LogoBQ from '../Assets/Images/BQWhite.png'

export default function HomePage() {
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        useNavigate('/')
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            return (
              setErrorMessage('Ingresa un email válido'),
              setErrorEmail('message_active')
            )
          case 'auth/wrong-password':
            return (
              setErrorMessage('Ingresa la contraseña correcta'),
              setErrorPassword('message_active')
            )
          case 'auth/invalid-email':
            return (
              setErrorMessage('Ingresa un email y contraseña válidos'),
              setErrorEmail('message_active'),
              setErrorPassword('message_active')
            )
          case 'auth/internal-error':
            return (
              setErrorMessage('Ingresa un email y contraseña válidos'),
              setErrorEmail('message_active'),
              setErrorPassword('message_active')
            )
          default:
            return setErrorMessage(false)
        }
      })
  }

  // const maskify = (password) => {
  //   return password.slice(0, -1).replace(/[a-zA-Z]/g, '*').concat(password.slice(-1, password.len))
  // }

  return (
    <div className='log_in_content'>
      <aside className='left_aside_content'>
        <img src={bannerLoginHamb} alt='Logo' className='banner_hamburguer' />
      </aside>

      <aside className='right_aside_content'>
        <img src={LogoBQ} alt='Logo' className='Logo' />
        <section className='form_log_in'>
          <input
            className={`imput_log_in  ${errorEmail} `}
            type='text'
            id='login-email'
            placeholder='Empleado e-mail'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          { errorMessage === 'Ingresa un email válido'
            ? <div className='Login_error'>{errorMessage}</div>
            : <div className='Login_error'></div>
          }

          <input
            className={`imput_log_in  ${errorPassword} `}
            type='text'
            id='login-password'
            placeholder='Contraseña'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          { errorMessage === 'Ingresa la contraseña correcta' || errorMessage === 'Ingresa un email y contraseña válidos'
            ? <div className='Login_error'>{errorMessage}</div>
            : <div className='Login_error'></div>
          }
          <button
            className='btn_log_in'
            id='login-btn'
            onClick={() => {
              handleLogin()
            }}
          >
            Ingresar
          </button>
        </section>

        <p className='footer'>Customer service</p>
      </aside>
    </div>
  )
}
