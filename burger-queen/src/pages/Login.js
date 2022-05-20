import '../styles/Login.css'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Lib/firebase-keys'

export default function HomePage () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
    console.log(auth.currentUser)
  }
  return (
    <div>
        <input type='text' id="login-email" placeholder='jesusR@burguerqueen.com' onChange={(e) => { setEmail(e.target.value) }} />
        <input type='text' id="login-password" placeholder='********' onChange={(e) => { setPassword(e.target.value) }} />
        <button id='login-btn' onClick={() => { handleLogin() }}>Ingresar</button>
        <p>Customer service</p>
    </div>

  )
}
