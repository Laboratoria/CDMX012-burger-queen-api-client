import '../../styles/Mesas.css'
import Add from '../../Assets/icons/yelowAdd.png'
import { Mesa } from './Mesa'
export const Mesas = ({ setMain, setAside, mesas, setMesas }) => {
  const handleOrder = () => {
    setMain('Menu')
    setAside('Comanda')
  }
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
