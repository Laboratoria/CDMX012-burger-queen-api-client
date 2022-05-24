import '../styles/Login.css'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Lib/firebase-keys'
import bannerLoginHamb from '../Assets/Images/bannerLogIn.png'
import LogoBQ from '../Assets/Images/BQWhite.png'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
    console.log(auth.currentUser)
  }

  return (
    <div className='log_in_content'>
      <aside className='left_aside_content'>
        <img src={bannerLoginHamb} alt='Logo' className='banner_hamburguer' />
      </aside>

      <aside className='right_aside_content'>
        <img src={LogoBQ} alt='Logo' className='Logo' />
        <section className='form_log_in'>
          <input className='imput_log_in'
            type='text'
            id='login-email'
            placeholder='Empleado e-mail'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <input className='imput_log_in'
            type='text'
            id='id="login-password"'
            placeholder='Contraseña'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button className='btn_log_in'
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
