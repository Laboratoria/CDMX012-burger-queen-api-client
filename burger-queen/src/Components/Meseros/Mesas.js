import '../../styles/Mesas.css'
import Add from '../../Assets/icons/yelowAdd.png'
import { auth } from '../../Lib/firebase-keys'
import { useState, useEffect } from 'react'
import { Mesa } from './Mesa'
export const Mesas = ({ setMain, setAside }) => {
  const [mesas, setMesas] = useState(null)
  const handleOrder = () => {
    setMain('Menu')
    setAside('Comanda')
  }

  const getMesas = async () => {
    const url = 'http://localhost:4000/orders'
    const getFetchData = await fetch(url).then((resul) => resul.json())
    console.log(getFetchData)
    const mesaFiltrada = getFetchData.filter((mesa) => mesa.waiterId === auth.currentUser.uid)
    setMesas(mesaFiltrada)
    console.log(mesas)
  }
  useEffect(() => {
    getMesas()
  }, [])
  return (
    <div className='mesas-contenedor'>{
      mesas && mesas.map((mesa) => (
        <Mesa mesa={mesa} key={mesa.id}/>
      ))}
    <img
      src={Add}
      alt='Add'
      className='icon_Add'
      onClick={() => {
        handleOrder()
      }}
    />
    </div>
  )
}
