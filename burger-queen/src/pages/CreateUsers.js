import '../styles/HomePage.css'
import { auth } from '../Lib/firebase-keys'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
function CreateUsers () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleNewUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  return (
    <div>
    <label>Email:</label>
    <input type='text' id="email" placeholder='jesusR@burguerqueen.com' onChange={(e) => { setEmail(e.target.value) }}/>
    <label>Password:</label>
    <input type='password' id="password" placeholder='**********' onChange={(e) => { setPassword(e.target.value) }}/>
    <button id='newUser' onClick={() => { handleNewUser() }}>Nuevo Usuario</button>

    </div>

  )
}
export default CreateUsers
