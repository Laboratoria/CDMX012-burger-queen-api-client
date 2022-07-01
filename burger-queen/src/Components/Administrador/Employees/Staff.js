// import { useState } from 'react'
import './Staff.css'
import { Waiters } from './Waiters'
import { Chefs } from './Chefs'
import { Administrators } from './Administrators'
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
      <Waiters editStaff = {editStaff} setEditStaff= {setEditStaff} setAside={ setAside } />
      <Chefs editStaff = {editStaff} setEditStaff= {setEditStaff} setAside= { setAside } />
      <Administrators editStaff = {editStaff} setEditStaff= {setEditStaff} setAside={ setAside } />
      <img src={Add} alt='Add' className='icon_Add' onClick={() => {
        handleStaff()
      }}
      />
    </section>
  )
}
