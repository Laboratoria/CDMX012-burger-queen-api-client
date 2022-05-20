import './App.css'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from './Lib/firebase-keys'
import PrivateRoutes from './Lib/PrivateRoutes'
import PublicRoutes from './Lib/PublicRoutes'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const getRol = async (user) => {
    const docRef = doc(db, 'User', user.uid)
    const rolRef = await getDoc(docRef)
    const rolUser = rolRef.data().rol
    setCurrentUser([user, rolUser])
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      getRol(user)
    } else {
      setCurrentUser(null)
    }
  })

  return (
    currentUser ? <PrivateRoutes currentUser={currentUser[0]} rol={currentUser[1]} /> : <PublicRoutes />
  )
}

export default App
