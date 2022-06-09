import { useState, useEffect } from 'react'
import { onSnapshot, collection, query, where } from 'firebase/firestore'
import { db } from '../../../Lib/firebase-keys'
import { deleteStaff } from '../../../Lib/Providers'

export const Waiters = () => {
  const [staff, setStaff] = useState([])

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
          <button id={waiter.uid} className='btn_employee' onClick={() => deleteStaff(waiter.id).then(console.log('lo quite amix'))}>-</button>
          <p>{waiter.name}</p>
          <button id={waiter.uid} className='btn_employee'>+</button>
        </section>
      )
    })}
  </div>
  )
}
