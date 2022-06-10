import './Administrators.css'
import { useState, useEffect } from 'react'
import { onSnapshot, collection, query, where } from 'firebase/firestore'
import { db } from '../../../Lib/firebase-keys'

export const Administrators = ({ deleteStaff, setAside, editStaff, setEditStaff }) => {
  const [staff, setStaff] = useState([])

  const handleEditStaff = (admin) => {
    setAside('CreateUsers')
    setEditStaff(admin)
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
          <button id={admin.id} className='btn_employee' onClick={() => deleteStaff(admin.id).then(console.log('lo quite amix'))}>-</button>
          <p>{admin.name}</p>
          <button id={admin.uid} className='btn_employee' onClick={() => { handleEditStaff(admin) }}>+</button>
        </section>
      )
    })}
  </div>
  )
}
