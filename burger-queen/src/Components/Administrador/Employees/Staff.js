// import { useState } from 'react'
import './Staff.css'
import { Waiters } from './Waiters'
import { Chefs } from './Chefs'
import { Administrators } from './Administrators'
import { deleteStaff } from '../../../Lib/Providers'
import Add from '../../../Assets/icons/yelowAdd.png'

export const Staff = ({ setAside, editStaff, setEditStaff }) => {
  // const [staff, setStaff] = useState([])
  // useEffect(() => {
  // }, [])

  const handleStaff = () => {
    setAside('CreateUsers')
  }
  return (
    <section className='tables_employees_container'>
      <Waiters setAside={ setAside } deleteStaff={deleteStaff} />
      <Chefs editStaff = {editStaff} setEditStaff= {setEditStaff} setAside= { setAside }deleteStaff={deleteStaff} />
      <Administrators setAside={ setAside }deleteStaff={deleteStaff} />
      <img src={Add} alt='Add' className='icon_Add' onClick={() => {
        handleStaff()
      }}
      />
    </section>
  )
}
