import { useState, useEffect } from 'react'
import { onSnapshot, collection, query, where } from 'firebase/firestore'
import { db } from '../../../Lib/firebase-keys'

export const Chefs = ({ deleteStaff, setAside, editStaff, setEditStaff }) => {
  const [staff, setStaff] = useState([])

  const handleEditStaff = (chef) => {
    setAside('CreateUsers')
    setEditStaff(chef)
  }
  console.log(editStaff)
  const getChef = async () => {
    const q = query(collection(db, 'User'), where('rol', '==', 'cocinero'))
    onSnapshot(q, (querySnapShot) => {
      const chefs = []
      querySnapShot.forEach((chef) => {
        chefs.push({ ...chef.data(), id: chef.id })
      })
      setStaff(chefs)
    })
  }

  useEffect(() => {
    getChef()
  }, [])

  return (<div className='employees_container'>
    <h4 className='employees_table_title'>Cocineros</h4>
    {staff.map((chef) => {
      return (
        <section className='employee_card' key={chef.uid}>
          <button id={chef.id} className='btn_employee' onClick={() => deleteStaff(chef.id).then(console.log('lo quite amix'))}>-</button>
          <p>{chef.name}</p>
          <button id={chef.uid} className='btn_employee' onClick={() => { handleEditStaff(chef) }}>+</button>
        </section>
      )
    })}
  </div>
  )
}
