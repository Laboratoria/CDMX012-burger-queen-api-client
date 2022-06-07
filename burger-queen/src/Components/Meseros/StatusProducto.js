import { PedidosListos } from '../Meseros/PedidosListos'

export const StatusProducto = ({ mesas }) => {
  console.log(mesas)
  return (
        <>
        <div className='mesas_contenedor'>
        {mesas &&
          mesas.map((mesa) => (
            <PedidosListos table={mesa.table} products={mesa.productos} key={mesa.id} />
          ))}
      </div>
          </>
  )
}
// asi se puede entrar mesas[0].productos[0].status
