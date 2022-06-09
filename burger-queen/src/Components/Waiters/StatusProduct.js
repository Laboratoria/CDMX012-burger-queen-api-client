import { OrdersReady } from '../Waiters/OrdersReady'
import '../../styles/ProductsControl.css'

export const StatusProduct = ({ rol, mesas }) => {
  return (
    <>
      <div className='tabless_container'>
        {mesas &&
          mesas.map((mesa) => (
            <OrdersReady
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
