import '../../../styles/HomePage.css'
import '../../../styles/CreateUsers.css'
import { auth, db } from '../../../Lib/firebase-keys'
import { createUserWithEmailAndPassword, updateProfile, updateCurrentUser } from 'firebase/auth'
// eslint-disable-next-line no-unused-vars
import { doc, setDoc } from 'firebase/firestore'
function CreateUsers({ setAside }) {
  const handleNewUser = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const rol = e.target.elements.rol.value
    const name = e.target.elements.name.value
    const turn = e.target.elements.turn.value
    newEmployee(email, password, rol, name, turn)
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

  return (
    <div className='form_new_user'>
      <h2>Agregar usuario:</h2>
      <form onSubmit={handleNewUser}>
        <input className='input_form' type='text' id="name" placeholder='Juanito' />
        <input className='input_form' type='text' id="email" placeholder='jesusR@burguerqueen.com' />
        <input className='input_form' type='password' id="password" placeholder='**********' />
        <select className='input_form' id="rol" placeholder='Empleado'>
          <option value="admin">Admin</option>
          <option value="mesero">Mesero</option>
          <option value="cocinero">Cocinero</option>
        </select>
        <select className='input_form' id="turn" placeholder='Matutino'>
          <option value="matutino">Matutino</option>
          <option value="vespertino">Vespertino</option>
        </select>
        <button id='newUser' onClick={() => { handleNewUser() }}>Nuevo Usuario</button>
      </form>
    </div>

  )
}
export default CreateUsers
