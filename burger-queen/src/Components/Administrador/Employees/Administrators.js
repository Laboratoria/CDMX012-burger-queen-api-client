import './Administrators.css'
import { useState, useEffect } from 'react'
import { onSnapshot, collection, query, where } from 'firebase/firestore'
import { db } from '../../../Lib/firebase-keys'

export const Administrators = ({ setAside, setEditStaff }) => {
  const [staff, setStaff] = useState([])

  const handleEditStaff = (admin) => {
    console.log(admin)
    setEditStaff(admin)
    setAside('CreateUsers')
  }

  const getAdministrator = async () => {
    const q = query(collection(db, 'User'), where('rol', '==', 'admin'))
    onSnapshot(q, (querySnapShot) => {
      const admins = []
      querySnapShot.forEach(admin => {
        admins.push({ ...admin.data(), id: admin.id })
      }
      )
      setStaff(admins)
    })
  }

  useEffect(() => {
    getAdministrator()
  }, [])

  return (<div className='employees_container'>
    <h4 className='employees_table_title'>Administradores</h4>
    {staff.map((admin) => {
      return (
        <section className='employee_card' key={admin.uid}>
          <p>{admin.name}</p>
          <button className='btn_employee' onClick={() => { handleEditStaff(admin) }}>+</button>
        </section>
      )
    })}
  </div>
  )
}
