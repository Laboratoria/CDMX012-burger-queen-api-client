import '../../styles/TablesOrders.css'
import Add from '../../Assets/icons/yelowAdd.png'
import { TableOrder } from './TableOrder'
export const TablesOrders = ({ onOff, setOnOff, setMain, setAside, mesas, setMesas }) => {
  const handleOrder = () => {
    setMain('Menu')
    setAside('Comanda')
  }
  return (
    <div className='tables_container'>{
      mesas && mesas.map((mesa) => (
        <TableOrder mesa={mesa} key={mesa.id} />
      ))}
      <img
        src={Add}
        alt='Add'
        className='icon_Add'
        onClick={() => {
          handleOrder()
          setOnOff(true)
        }}
      />
    </div>
  )
}
