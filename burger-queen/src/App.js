import './App.css'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from './Lib/firebase-keys'
import PrivateRoutes from './Lib/PrivateRoutes'
import PublicRoutes from './Lib/PublicRoutes'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const getRol = async () => {
    const docRef = doc(db, 'User', 'admin@burgerqueen.com')
    const rolRef = await getDoc(docRef)

    if (rolRef.exists()) {
      const rolUser = rolRef.data().rol
      setCurrentUser(['admin@burgerqueen.com', rolUser])
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
  }

  useEffect(() => {
    getRol()
  }, [])

  console.log(currentUser)

  return (
    currentUser ? <PrivateRoutes currentUser={currentUser[0]} rol={currentUser[1]} /> : <PublicRoutes />
  )
}

export default App
