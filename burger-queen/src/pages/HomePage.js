import '../styles/HomePage.css'
import LogoBQB from '../Assets/Images/BQBlack.png'
import LogOut from '../Assets/icons/logOut.png'
import { ListProducts } from '../Components/ListProducts'
import CreateUsers from '../Components/Administrador/Empleados/CreateUsers'
import { Mesas } from '../Components/Meseros/Mesas'
import { Comanda } from '../Components/Meseros/Comanda'
import { Staff } from '../Components/Administrador/Empleados/Staff'
import { useState, useEffect } from 'react'
import { StatusProducto } from '../Components/Meseros/StatusProducto'

// eslint-disable-next-line react/prop-types
export default function HomePage({ handleExit, currentUser, rol }) {
  const getDates = new Date()
  const DateHour = getDates.getHours() + ':' + getDates.getMinutes()
  const [handleMain, setHandleMain] = useState('')
  const [handleAside, setHandleAside] = useState('')
  const [mesas, setMesas] = useState([])
  console.log(mesas)
  const getMesas = async () => {
    const url = 'http://localhost:4000/orders'
    const getFetchData = await fetch(url).then((resul) => resul.json())
    console.log(getFetchData)
    const mesaFiltrada = getFetchData.filter((mesa) => mesa.waiterId === currentUser.uid)
    setMesas(mesaFiltrada)
  }
  // da valor al handle de renderizado segun el rol
  const setFristRender = () => {
    if (rol === 'admin') {
      setHandleMain('Empleados')
      setHandleAside('null')
    }
    if (rol === 'mesero') {
      setHandleMain('Mesas')
      setHandleAside('PedidosListos')
    }
    if (rol === 'cocinero') {
      setHandleMain('Comandas')
      setHandleAside('null')
    }
  }

  // hace renderizado condicional en main
  const handleMainRender = (handleMain) => {
    if (handleMain === 'Empleados') {
      return <Staff setAside={setHandleAside}/>
    }
    if (handleMain === 'Mesas') {
      return <Mesas setMain={setHandleMain} setAside={setHandleAside} mesas={mesas} setMesas={setMesas}/>
    }
    if (handleMain === 'Menu') {
      return <ListProducts order={order} setOrder={setOrder} />
    }
  }

  // hace renderizado condicional en Aside
  const handleAsideRender = (handleMain) => {
    if (handleMain === 'Comanda') {
      return <Comanda order={order} setOrder={setOrder} setMain={setHandleMain} setAside={setHandleAside}/>
    }
    if (handleMain === 'CreateUsers') {
      return <CreateUsers setAside={setHandleAside} />
    }
    if (handleMain === 'PedidosListos') {
      return <StatusProducto mesas={mesas} setMesas={setMesas}/>
    }
  }

  // observa el cambio en la funcion setFristRender
  useEffect(() => {
    getMesas()
    setFristRender()
  }, [])

  const [order, setOrder] = useState({
    orderId: 1,
    table: '',
    clientName: '',
    productos: [],
    totalProducts: '',
    totalPrice: '',
    status: 'kitchen',
    waiter: currentUser.displayName,
    waiterId: currentUser.uid,
    startTime: DateHour,
    endtTime: '',
    totalTime: ''
  })

  return (
    <div className='home_container'>
      <header className='header_home'>
        <img src={LogoBQB} alt='Logo' className='logo_header' />

        {rol === 'admin' && (
          <p
            className={`${
              handleMain === 'Empleados' ? 'activeB' : 'inactiveB'
            }`}
            onClick={() => { setHandleMain('Empleados'); setHandleAside('null') } }
          >
            Empleados{' '}
          </p>
        )}
        {rol === 'admin' && (
          <p
            className={`${
              handleMain === 'Menu' ? 'activeB' : 'inactiveB'
            }`}
            onClick={() => { setHandleMain('Menu'); setHandleAside('null') }}
          >
            {' '}
            Productos
          </p>
        )}

        {rol === 'mesero' && (
          <p
            className={`${handleMain === 'Mesas' ? 'activeB' : 'inactiveB'}`}
            onClick={() => { setHandleMain('Mesas'); setHandleAside('null') }}
          >
            Mesas
          </p>
        )}
        {rol === 'mesero' && (
          <p
            className={`${handleMain === 'Menu' ? 'activeB' : 'inactiveB'}`}
            onClick={() => { setHandleMain('Menu'); setHandleAside('null') }}
          >
            {' '}
            Menu
          </p>
        )}

        {rol === 'cocinero' && (
          <p
            className={`${handleMain === 'Comandas' ? 'activeB' : 'inactiveB'}`}
            onClick={() => { setHandleMain('Comandas'); setHandleAside('null') }}
          >
            Comandas
          </p>
        )}
        {rol === 'cocinero' && (
          <p
            className={`${handleMain === 'Recetas' ? 'activeB' : 'inactiveB'}`}
            onClick={() => { setHandleMain('Menu'); setHandleAside('null') }}
          >
            {' '}
            Recetas
          </p>
        )}

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
        <p><b>{currentUser.displayName}</b></p>
        <p><b>{rol}</b></p>
        <p><b>Hora:</b> {DateHour} </p>
      </div>

      <main className='main_home'>
        {rol === 'admin' && handleMainRender(handleMain)}
        {rol === 'mesero' && handleMainRender(handleMain)}
        {rol === 'cocinero' && handleMainRender(handleMain)}
      </main>

      <aside className='rol_aside'>
        {rol === 'admin' && handleAsideRender(handleAside)}
        {rol === 'mesero' && handleAsideRender(handleAside)}
        {rol === 'cocinero' && handleAsideRender(handleAside)}
      </aside>
    </div>
  )
}
