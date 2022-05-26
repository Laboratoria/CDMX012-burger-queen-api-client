// import { useState } from 'react'
import './Staff.css'
import { Meseros } from './Meseros'
import { Cocineros } from './Cocineros'
import { Administradores } from './Administradores'

export const Staff = () => {
  // const [staff, setStaff] = useState([])
  // useEffect(() => {
  // }, [])
  return (
    <section className='contenedor_tablas'>
      <Meseros />
      <Cocineros />
      <Administradores />
    </section>
  )
}
