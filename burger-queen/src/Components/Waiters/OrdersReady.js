/* eslint-disable indent */
import graybell from '../../Assets/icons/whiteBell.png'
import { useState } from 'react'

export const OrdersReady = ({ rol, mesa, setMesas, table, products }) => {
  const [productDelivery, SetProductDelivery] = useState({
    id: mesa.id,
    orderId: mesa.orderId,
    table: mesa.table,
    clientName: mesa.clientName,
    productos: mesa.productos,
    totalProducts: mesa.totalProducts,
    totalPrice: mesa.totalPrice,
    TableStatus: mesa.TableStatus,
    waiter: mesa.displayName,
    waiterId: mesa.uid,
    startTime: mesa.startTime,
    endtTime: mesa.endtTime,
    totalTime: mesa.totalTime
  })
  const handleDeliveryProduct = (CurrentProduct, mesa) => {
    // entra a la orden luego a producto y busca el producto en el array , si el seleccionado coincide con el id
    const id = mesa.productos.findIndex((producto) => {
      return producto.id === CurrentProduct.id
    })
    console.log(id)
    const updatedMesa = [...mesa.productos]
    for (const property in updatedMesa[id]) {
      if (property === 'productStatus') {
        updatedMesa[id][property] = 'delivery'
      }
    }
    SetProductDelivery({ ...productDelivery, productos: [...updatedMesa] })
    fetchProductos({ ...productDelivery, productos: [...updatedMesa] })
  }
  const fetchProductos = async (productStats) => {
    await fetch(`http://localhost:4000/orders/${mesa.id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(productDelivery)
    }).then(response => response.json()).then(console.log('actualizado'))
  }
  const handleStats = async (product) => {
    handleDeliveryProduct(product, mesa)
  }
  return (
    <>
      <div className='tables_container'>
        {products &&
          products.map((product) => (
            (product.productStatus === 'ready')
              ? (<div className='tablesAside_table' key={product.id}>
                <div className='table_number'>{table}</div>
                <div className='product_table_name' >{product.name}</div>
                <div className='table_quantity' >{product.cantidad}</div>
                {rol === 'mesero'
                  ? (<img
                    src={graybell}
                    alt='bell'
                    className='icon_bell'
                    onClick={ () => { handleStats(product) }}
                  />)
                  : (
                    <div className='product_time'> 0:15 </div>
                  )
                }

              </div>
              )
              : undefined
          ))
        }
      </div>
    </>
  )
}
// asi se puede entrar mesas[0].productos[0].status
