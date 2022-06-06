import '../../styles/Mesas.css'
import Add from '../../Assets/icons/yelowAdd.png'

export const Mesas = ({ setMain, setAside }) => {
  const handleOrder = () => {
    setMain('Menu')
    setAside('Comanda')
  }

  return (
    <img
      src={Add}
      alt='Add'
      className='icon_Add'
      onClick={() => {
        handleOrder()
      }}
    />
  )
}
