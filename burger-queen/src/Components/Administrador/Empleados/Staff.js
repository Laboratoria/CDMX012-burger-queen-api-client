// import { useState } from 'react'
import { Meseros } from './Meseros'
import { Cocineros } from './Cocineros'
import { Administradores } from './Administradores'

export const Staff = () => {
  // const [staff, setStaff] = useState([])
  // useEffect(() => {
  // }, [])
  return (
       <section className='contenedor de empleados'>
         <Meseros />
         <Cocineros />
         <Administradores />
       </section>
  )
}
