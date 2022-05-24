import './App.css'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from './Lib/firebase-keys'
import PrivateRoutes from './Lib/PrivateRoutes'
import PublicRoutes from './Lib/PublicRoutes'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const currentUserX = async () => {
    return onAuthStateChanged(auth, (user) => setCurrentUser(user))
  }

  const getRol = async () => {
    const sim = await currentUserX()
    console.log(sim.email)
    const docRef = doc(db, 'User', sim.email)
    const rolRef = await getDoc(docRef)

    if (rolRef.exists()) {
      const rolUser = rolRef.data().rol
      setCurrentUser([sim.email, rolUser])
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
  }

  useEffect(() => {
    currentUserX()
    getRol()
  }, [])

  console.log(currentUser)

  return (
    currentUser ? <PrivateRoutes currentUser={currentUser[0]} rol={currentUser[1]} /> : <PublicRoutes />
  )
}

export default App
