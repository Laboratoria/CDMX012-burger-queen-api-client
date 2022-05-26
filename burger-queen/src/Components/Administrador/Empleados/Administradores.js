import './Administradores.css'
import { useState, useEffect } from 'react'
import { onSnapshot, collection, query, where } from 'firebase/firestore'
import { db } from '../../../Lib/firebase-keys'

export const Administradores = () => {
  const [staff, setStaff] = useState([])

  const getMesero = async () => {
    const q = query(collection(db, 'User'), where('rol', '==', 'admin'))
    onSnapshot(q, (querySnapShot) => {
      const admins = []
      querySnapShot.forEach(admin => {
        admins.push({ ...admin.data() })
      }
      )
      setStaff(admins)
      console.log(setStaff)
    })
  }

  useEffect(() => {
    getMesero()
  }, [])

  return (<div className='contenedor_de_empleados'>
    <h4 className='titulo_tabla_empleados'>Administradores</h4>
    {staff.map((ad) => {
      return (
        <section className='tarjeta_de_empleados' key={ad.uid}>
          <p>{ad.name}</p>
          <button id={ad.uid} className='btn_empleado'>+</button>
        </section>
      )
    })}
  </div>
  )
}
