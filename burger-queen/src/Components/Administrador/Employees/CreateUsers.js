/* eslint-disable indent */
import '../../../styles/HomePage.css'
import '../../../styles/CreateUsers.css'
import { auth, db } from '../../../Lib/firebase-keys'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile, updateCurrentUser } from 'firebase/auth'
// eslint-disable-next-line no-unused-vars
import { doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore'

function CreateUsers({ deleteStaff, editStaff, setAside }) {
  const [employe, setEmploye] = useState(editStaff)
  console.log(employe)
  const setOnChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setEmploye({ ...employe, [name]: value })
  }

  const handleEditStaff = async (e) => {
    e.preventDefault()
    const docRef = doc(db, `User/${employe.uid}`)
    await updateDoc(docRef, employe)
    setAside('null')
    console.log('usuario: ' + employe.name + '  editado')
  }

  const handleNewUser = async (e) => {
    e?.preventDefault()
    const email = e?.target.elements?.email.value
    const password = e?.target.elements?.password.value
    const rol = e?.target.elements?.rol.value
    const name = e?.target.elements?.name.value
    const turn = e?.target.elements?.turn.value
    await newEmployee(email, password, rol, name, turn)
    setAside('null')
  }
  const userInDisplay = auth.currentUser
  // eslint-disable-next-line no-unused-vars
  async function newEmployee(email, password, rol, name, turn) {
    // eslint-disable-next-line no-unused-vars
    const infoEmployee = await createUserWithEmailAndPassword(auth, email, password) // Its generating a new user
      .then((user) => {
        console.log(user, 'user')
        const docRef = doc(db, `User/${user.user.uid}`)
        setDoc(docRef, {
          email,
          password,
          rol,
          uid: user.user.uid,
          name,
          turn
        }).then(async () => {
          updateProfile(auth.currentUser, { displayName: name })
          await updateCurrentUser(auth, userInDisplay)
        })
        console.log('Document written with ID: ', docRef.id)
        return user
      })
  }
  const handleDeleteStaff = () => {
     deleteDoc(doc(db, 'User', employe.uid))
    setAside('null')
  }

  return (
    <>
      {(editStaff === null)
        ? (
          <div className='form_new_user'>
            <h2>Agregar usuario:</h2>
            <form onSubmit={handleNewUser}>
            <input className='input_form' type='text' id="name" placeholder='Nombre del empleado' />
            <input className='input_form' type='text' id="email" placeholder='Correo electronico' />
            <input className='input_form' type='password' id="password" placeholder='Contraseña' />
            <select className='input_form' id="rol" placeholder='Puesto'>
              <option value='mesero' className="label">Puesto</option>
              <option value="admin">Admin</option>
              <option value="mesero">Mesero</option>
              <option value="cocinero">Cocinero</option>
            </select>
            <select className='input_form' id="turn" placeholder='Turno'>
              <option value='matutino' className="label">Turno</option>
              <option value="matutino">Matutino</option>
              <option value="vespertino">Vespertino</option>
            </select>
            <button id='newUser' onClick={ () => { handleNewUser() }}>Nuevo Usuario</button>
          </form>
          </div>
        )
        : (
          <div className='form_new_user' >
            <h2>Actualizar empleado</h2>
              <form>
                <input className='input_form' type='text' name='name' placeholder='Nombre del empleado' value={employe.name} onChange={(e) => { setOnChange(e) }} />
                <input className='input_form' type='text' name='email' placeholder='Correo electronico' value={employe.email} onChange={(e) => { setOnChange(e) }}/>
                <input className='input_form' type='password' name='password' placeholder='Contraseña' value={employe.password} onChange={(e) => { setOnChange(e) }}/>
                <select className='input_form' name='rol' value={employe.rol} onChange={(e) => { setOnChange(e) }}>
                  <option disabled >Puesto</option>
                  <option value="admin">Admin</option>
                  <option value="mesero">Mesero</option>
                  <option value="cocinero">Cocinero</option>
                </select>
                <select className='input_form' name='turn' value={employe.turn} onChange={(e) => { setOnChange(e) }}>
                  <option disabled >Turno</option>
                  <option value="matutino">Matutino</option>
                  <option value="vespertino">Vespertino</option>
                </select>
                <button id='newUser' onClick={(e) => { handleEditStaff(e) }}>Actualizar empleado</button>
                <button className='btn_products' id='btn_delete_products' onClick={ () => { handleDeleteStaff() }} > Eliminar empleado </button>
              </form>
            </div>
        )}
</>
  )
}
export default CreateUsers
