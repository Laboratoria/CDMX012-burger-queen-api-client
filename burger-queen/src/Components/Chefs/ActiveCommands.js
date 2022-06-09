import { ActiveCommand } from './ActiveCommand'
export const ActiveCommands = ({ mesas, setMesas }) => {
  console.log(mesas)
  return (
    <div className='tables_container'>{
      mesas && mesas.map((mesa) => (
        <ActiveCommand mesa={mesa} mesas={mesas} setMesas={setMesas} key={mesa.id} mesaId={mesa.id} />
      ))}
    </div>
  )
}
