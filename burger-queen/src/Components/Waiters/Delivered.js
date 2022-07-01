import { ProductsDelivered } from '../Waiters/ProductsDelivered'
import '../../styles/ProductsControl.css'

export const Delivered = ({ mesas }) => {
  return (
    <>
      <div className='tables_container'>
        {mesas &&
          mesas.map((mesa) => (
            <ProductsDelivered
              table={mesa.table}
              products={mesa.productos}
              key={mesa.id}
            />
          ))}
      </div>
    </>
  )
}
