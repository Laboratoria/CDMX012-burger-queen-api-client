// import { useState } from 'react'
import './Staff.css'
import { Meseros } from './Meseros'
import { Cocineros } from './Cocineros'
import { Administradores } from './Administradores'
import { deleteStaff } from '../../../Lib/Providers'
import Add from '../../../Assets/icons/yelowAdd.png'

export const Staff = ({ setAside }) => {
  // const [staff, setStaff] = useState([])
  // useEffect(() => {
  // }, [])

  const handleStaff = () => {
    setAside('CreateUsers')
  }
  return (
    <section className='contenedor_tablas'>
      <Meseros deleteStaff={deleteStaff}/>
      <Cocineros deleteStaff={deleteStaff}/>
      <Administradores deleteStaff={deleteStaff}/>
      <img src={Add} alt='Add'className='icon_Add' onClick={() => {
        handleStaff()
      }}
    />
    </section>
  )
}
