import { useState } from 'react'
export const ActiveCommand = ({ mesa }) => {
  const [productStatus, SetProductStatus] = useState({
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

  const updateStatus = (currentProducto, mesa) => {
    const id = mesa.productos.findIndex((producto) => {
      return producto.id === currentProducto.id
    })
    const updatedMesa = [...mesa.productos]
    for (const property in updatedMesa[id]) {
      if (property === 'productStatus') {
        updatedMesa[id][property] = 'ready'
      }
    }
    console.log(updatedMesa)
    fetchProductos({ ...productStatus, productos: [...updatedMesa] })
    SetProductStatus({ ...productStatus, productos: [...updatedMesa] })
  }
  const fetchProductos = async (productStats) => {
    await fetch(`http://localhost:4000/orders/${mesa.id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(productStats)
    }).then(response => response.json()).then(console.log('actualizado'))
  }
  const handleSubmit = async (product) => {
    updateStatus(product, mesa)
  }

  return (
    <div className='container_table' key={mesa.id}>
      <table className='data_table'>
        <thead>
          <tr><th id='title_table'>Mesa<br />{mesa.table} </th><th id='time_title'>{mesa.startTime}</th></tr>
        </thead>
        {mesa && mesa.productos.map((product) => (
          (product.productStatus === 'kitchen')
            ? (<tbody key={product.name}>
              <tr><td>{product.cantidad}</td><td>{product.name}<button onClick={() => { handleSubmit(product) }}>-</button></td></tr>
            </tbody>)
            : undefined
        ))
        }
      </table>
    </div>
  )
}
