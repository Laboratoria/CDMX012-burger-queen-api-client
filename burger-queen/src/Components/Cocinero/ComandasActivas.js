import { ComandaActiva } from './ComandaActiva'
export const ComandasActivas = ({ setMain, setAside, mesas, setMesas }) => {
  return (
  <div className='mesas-contenedor'>{
    mesas && mesas.map((mesa) => (
      <ComandaActiva mesa={mesa} key={mesa.id}/>
    ))}
  </div>
  )
}
