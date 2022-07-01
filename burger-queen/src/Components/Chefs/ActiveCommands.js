import { ActiveCommand } from './ActiveCommand'

export const ActiveCommands = ({ mesas }) => {
  return (
    <div className='tables_container'>
      {mesas && mesas.map((mesa) => (
        (mesa.TableStatus === 'kitchen')
          ? (<ActiveCommand mesa={mesa} key={mesa.id}/>)
          : null
      ))}
    </div>
  )
}
