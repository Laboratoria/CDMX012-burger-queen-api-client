import '../styles/HomePage.css'
import LogoBQB from '../Assets/Images/BQBlack.png'
import LogOut from '../Assets/icons/logOut.png'
import { ListProducts } from '../Components/ListProducts'
import CreateUsers from '../Components/Administrador/Empleados/CreateUsers'
import { EnviarComanda } from '../Components/Meseros/Comanda'
import { Staff } from '../Components/Administrador/Empleados/Staff'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function HomePage({ handleExit, currentUser, rol }) {
  const getDates = new Date()
  const DateHour = getDates.getHours() + ':' + getDates.getMinutes()

  const [order, setOrder] = useState({
    productos: [],
    table: 0,
    clientName: '',
    startTime: DateHour,
    price: 8,
    orderId: 1,
    waiter: currentUser.displayName,
    waiterId: currentUser.uid,
    cantidad: '',
    endtTime: '15:30:10',
    status: 'pending',
    totalTime: '15:30:10'
  })

  // setOrder({ ...order, productos: [...order.productos, product] })

  return (
    <div className='home_container'>
      <header className='header_home'>
        <img src={LogoBQB} alt='Logo' className='logo_header' />
        <p className='inactiveB'>Mesas</p>
        <p className='activeB'>Menú</p>
        <img
          src={LogOut}
          alt='Logo'
          className='icon_header'
          onClick={() => {
            handleExit().then(() => console.log('cerraste sesion'))
          }}
        />
      </header>
      <div className='rol_info'>
        <p> <b>Usuario</b> {currentUser.displayName || 'Usuario'} </p>
        <p> <b>Hora:</b> {DateHour} </p>
      </div>

      <main className='main_home'>

        {rol === 'admin'
          ? <Staff />
          : <ListProducts order={order} setOrder={setOrder} />
        }
      </main>
      <aside className="rol_aside">
        {rol === 'admin'
          ? <CreateUsers />
          : <EnviarComanda order={order} setOrder={setOrder}/>
        }

      </aside>
    </div>
  )
}
