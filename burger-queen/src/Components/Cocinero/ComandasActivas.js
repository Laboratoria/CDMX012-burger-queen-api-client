import { ComandaActiva } from './ComandaActiva'
export const ComandasActivas = ({ mesas, setMesas }) => {
  console.log(mesas)
  return (
  <div className='mesas-contenedor'>{
    mesas && mesas.map((mesa) => (
      <ComandaActiva mesa={mesa} mesas={mesas} setMesas={setMesas} key={mesa.id} mesaId={mesa.id}/>
    ))}
  </div>
  )
}
