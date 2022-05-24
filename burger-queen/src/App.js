import './App.css'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db, auth } from './Lib/firebase-keys'
import PrivateRoutes from './Lib/PrivateRoutes'
import PublicRoutes from './Lib/PublicRoutes'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [rol, setRol] = useState(null)

  const getRol = async (user) => {
    console.log(user)
    const docRef = doc(db, 'User', user)
    const rolRef = await getDoc(docRef)
    console.log(rolRef.data().rol)
    return rolRef.data().rol
  }

  const userRol = (user) => {
    getRol(user.uid).then((resul) => setRol(resul))
    console.log(rol)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
        userRol(user)
      } else {
        setCurrentUser(null)
      }
    })
  }, [])

  console.log(currentUser, rol)
  return (
    currentUser ? <PrivateRoutes currentUser={currentUser} rol={rol} /> : <PublicRoutes />
  )
}

export default App
