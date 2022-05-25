import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CreateUsers from '../pages/CreateUsers'
import { exit } from './Providers'
import PropTypes from 'prop-types'

export default function PrivateRoutes({ currentUser, rol }) {
  console.log(currentUser, rol)
  if (rol === 'admin' && currentUser !== null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage handleExit={exit} currentUser={currentUser} />} />
          <Route path='/CreateUsers' element={<CreateUsers />} />
        </Routes>
      </BrowserRouter>

    )
  }
  if (rol === 'mesero' && currentUser !== null) {
    return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage handleExit={exit} currentUser={currentUser} />} />
        </Routes>
      </BrowserRouter>

    )
  }
}

PrivateRoutes.propTypes = {
  currentUser: PropTypes.any,
  rol: PropTypes.any
}
