import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import CreateUsers from '../pages/CreateUsers'
export default function PrivateRoutes () {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage />} />
    </Routes>
    </BrowserRouter>

  )
}
