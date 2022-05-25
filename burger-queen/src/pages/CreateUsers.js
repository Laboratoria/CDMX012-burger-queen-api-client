import '../styles/HomePage.css'
import { auth, db } from '../Lib/firebase-keys'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
// eslint-disable-next-line no-unused-vars
import { doc, setDoc } from 'firebase/firestore'
function CreateUsers() {
  const handleNewUser = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const rol = e.target.elements.rol.value
    const name = e.target.elements.name.value
    const turn = e.target.elements.turn.value
    newEsclavo(email, password, rol, name, turn)
  }
  // eslint-disable-next-line no-unused-vars
  async function newEsclavo(email, password, rol, name, turn) {
    // eslint-disable-next-line no-unused-vars
    const infoEsclavo = await createUserWithEmailAndPassword(auth, email, password) // Its generating a new user
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
        }).then(() => {
          updateProfile(auth.currentUser, { displayName: name })
        })
        console.log('Document written with ID: ', docRef.id)
        return user
      })
  }

  return (
    <div>
      <form onSubmit={handleNewUser}>
        <label>Nombre empleado :</label>
        <input type='text' id="name" placeholder='Juanito' />
        <label>Email:</label>
        <input type='text' id="email" placeholder='jesusR@burguerqueen.com' />
        <label>Password:</label>
        <input type='password' id="password" placeholder='**********' />
        <label>Rol</label>
        <select id="rol" placeholder='Esclavo'>
          <option value="Esclavo">Esclavo</option>
          <option value="admin">Admin</option>
          <option value="mesero">Mesero</option>
          <option value="cocinero">Cocinero</option>
        </select>
        <label>Turno:</label>
        <select id="turn" placeholder='Matutino'>
          <option value="matutino">Matutino</option>
          <option value="vespertino">Vespertino</option>
        </select>
        <button id='newUser' onClick={() => { handleNewUser() }}>Nuevo Usuario</button>
      </form>
    </div>

  )
}
export default CreateUsers
