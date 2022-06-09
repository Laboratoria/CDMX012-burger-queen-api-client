// import { useState } from 'react'
import './Staff.css'
import { Waiters } from './Waiters'
import { Chefs } from './Chefs'
import { Administrators } from './Administrators'
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
    <section className='tables_employees_container'>
      <Waiters deleteStaff={deleteStaff} />
      <Chefs deleteStaff={deleteStaff} />
      <Administrators deleteStaff={deleteStaff} />
      <img src={Add} alt='Add' className='icon_Add' onClick={() => {
        handleStaff()
      }}
      />
    </section>
  )
}
