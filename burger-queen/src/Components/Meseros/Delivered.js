import { ProductsDelivered } from '../Meseros/ProductsDelivered'
import '../../styles/ProductsControl.css'

export const Delivered = ({ mesas }) => {
  return (
    <>
      <div className='mesas_contenedor'>
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
