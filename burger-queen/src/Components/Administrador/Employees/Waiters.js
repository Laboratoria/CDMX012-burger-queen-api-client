import { useState, useEffect } from 'react'
import { onSnapshot, collection, query, where } from 'firebase/firestore'
import { db } from '../../../Lib/firebase-keys'

export const Waiters = ({ setAside, setEditStaff }) => {
  const [staff, setStaff] = useState([])

  const handleEditStaff = (waiter) => {
    setAside('CreateUsers')
    setEditStaff(waiter)
  }

  const getWaiter = async () => {
    const q = query(collection(db, 'User'), where('rol', '==', 'mesero'))
    onSnapshot(q, (querySnapShot) => {
      const waiters = []
      querySnapShot.forEach((waiter) => {
        waiters.push({ ...waiter.data(), id: waiter.id })
      })
      setStaff(waiters)
    })
  }

  useEffect(() => {
    getWaiter()
  }, [])

  return (<div className='employees_container'>
    <h4 className='employees_table_title'>Meseros</h4>
    {staff.map((waiter) => {
      return (
        <section className='employee_card' key={waiter.uid}>
          <p>{waiter.name}</p>
          <button className='btn_employee' onClick={() => { handleEditStaff(waiter) }}>+</button>
        </section>
      )
    })}
  </div>
  )
}
