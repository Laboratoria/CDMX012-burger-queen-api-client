import { useState, useEffect } from 'react'
import { onSnapshot, collection, query, where } from 'firebase/firestore'
import { db } from '../../../Lib/firebase-keys'

export const Cocineros = () => {
  const [staff, setStaff] = useState([])

  const getMesero = async () => {
    const q = query(collection(db, 'User'), where('rol', '==', 'cocinero'))
    onSnapshot(q, (querySnapShot) => {
      const meseros = []
      querySnapShot.forEach((mesero) => {
        meseros.push({ ...mesero.data() })
      })
      setStaff(meseros)
      console.log(staff)
    })
  }

  useEffect(() => {
    getMesero()
  }, [])

  return (<div>
       {staff.map((mese) => {
         return (
         <section className='contenedor_de_empleados' key={mese.uid}>
           <p>{mese.name}</p>
           <p>{mese.email}/</p>
         </section>
         )
       })}
       </div>
  )
}
