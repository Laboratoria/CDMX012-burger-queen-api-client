import { useState } from 'react'
import '../../../styles/HomePage.css'
import '../../../styles/CreateUsers.css'
// import { db } from '../../../Lib/firebase-keys'
// eslint-disable-next-line no-unused-vars
import { doc, setDoc, getDoc } from 'firebase/firestore'
function EditarStaff(info) {
  console.log(info.info)
  const [updateInfo, setUpdateInfo] = useState(info.info)
  console.log(updateInfo)
  console.log(setUpdateInfo)
  /*  const email = info.email
    const password = e.target.elements.password.value
    const rol = e.target.elements.rol.value
    const name = e.target.elements.name.value
    const turn = e.target.elements.turn.value */
  return (
    <div className='form_usuario_nuevo'>
      <h2>Editar usuario:</h2>
      <form >
        <input className='input_form' type='text' id="name" placeholder={updateInfo.name}/>
        <h3>{updateInfo.name}</h3>
        <input className='input_form' type='text' id="email" placeholder='jesusR@burguerqueen.com' />
        <input className='input_form' type='password' id="password" placeholder='**********' />
        <select className='input_form' id="rol" placeholder='Esclavo'>
          <option value="Esclavo">Esclavo</option>
          <option value="admin">Admin</option>
          <option value="mesero">Mesero</option>
          <option value="cocinero">Cocinero</option>
        </select>
        <select className='input_form' id="turn" placeholder='Matutino'>
          <option value="matutino">Matutino</option>
          <option value="vespertino">Vespertino</option>
        </select>
        <button id='newUser'>Editar Usuario</button>
      </form>
    </div>

  )
}
export default EditarStaff
