import { useState, useEffect } from 'react'
import { onSnapshot, collection, query, where } from 'firebase/firestore'
import { db } from '../../../Lib/firebase-keys'

export const Meseros = () => {
  const [staff, setStaff] = useState([])

  const getMesero = async () => {
    const q = query(collection(db, 'User'), where('rol', '==', 'mesero'))
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

  return (<div className='contenedor_de_empleados'>
    <h4 className='titulo_tabla_empleados'>Meseros</h4>
    {staff.map((mese) => {
      return (
        <section className='tarjeta_de_empleados' key={mese.uid}>
          <p>{mese.name}</p>
          <button id={mese.uid} className='btn_empleado'>+</button>
        </section>
      )
    })}
  </div>
  )
}
