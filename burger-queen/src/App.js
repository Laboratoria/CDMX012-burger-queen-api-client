import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import CreateUsers from './pages/CreateUsers'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Lib/firebase-keys'
function App () {
  const [currentUser, setCurrentUser] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user)
      console.log(currentUser)
    } else {
      setCurrentUser(null)
    }
  })

  return (
    <div className="App">
        <Login/>
        <HomePage/>
        <CreateUsers/>

    </div>
  )
}

export default App
