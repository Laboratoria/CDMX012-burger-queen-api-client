import { auth } from './firebase-keys'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'

export function useAuth () {
  const [currentUser, setCurrentUser] = useState()
  // const navigate = useNavigate()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    if (!unsub) {
    // navigate('/login')
    }
    return unsub
  })
  return currentUser
}
