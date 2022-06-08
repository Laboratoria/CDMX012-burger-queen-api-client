import { useState } from 'react'
export const ComandaActiva = ({ mesa, mesas, setMesas, mesaId }) => {
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
  const fetchProductos = async(productStats) => {
    await fetch(`http://localhost:4000/orders/${mesa.id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(productStats)
    }).then(response => response.json()).then(console.log('actualizado'))
  }
  const handleSubmit = async(producto) => {
    updateStatus(producto, mesa)
  }

  return (
  <div className= 'mesa-contenedor' key={mesa.id}>
    <table className='datos-mesa'>
    <thead>
    <tr><th id='titulo-mesa'>Mesa<br/>{mesa.table} </th><th id='titulo-tiempo'>{mesa.startTime}</th></tr>
    </thead>
    { mesa && mesa.productos.map((producto) => (
      (producto.productStatus === 'kitchen')
        ? (<tbody key={producto.name}>
      <tr><td>{producto.cantidad}</td><td>{producto.name}<button onClick={ () => { handleSubmit(producto) }}>-</button></td></tr>
      </tbody>)
        : undefined
    ))
      }
        </table>
  </div>
  )
}
