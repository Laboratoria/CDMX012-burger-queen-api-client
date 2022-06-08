import { PedidosListos } from '../Meseros/PedidosListos'
import '../../styles/ProductsControl.css'

export const StatusProducto = ({ rol, mesas }) => {
  return (
    <>
      <div className='mesas_contenedor'>
        {mesas &&
          mesas.map((mesa) => (
            <PedidosListos
              rol={rol}
              table={mesa.table}
              products={mesa.productos}
              key={mesa.id}
            />
          ))}
      </div>
    </>
  )
}
// asi se puede entrar mesas[0].productos[0].status
