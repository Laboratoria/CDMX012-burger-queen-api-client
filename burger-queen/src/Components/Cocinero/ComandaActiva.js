import { useState, useEffect } from 'react'
export const ComandaActiva = ({ mesa }) => {
  const [loading, setLoading] = useState(false)
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

  const yaTa = (currentProducto, mesa) => {
    const id = mesa.productos.findIndex((producto) => {
      return producto.id === currentProducto.id
    })
    const updatedMesa = [...mesa.productos]
    for (const property in updatedMesa[id]) {
      if (property === 'productStatus') {
        updatedMesa[id][property] = 'ready'
        SetProductStatus({ ...productStatus, productos: [...updatedMesa] })
      }
    }
    console.log(updatedMesa)
  }
  console.log(productStatus)
  const fetchProductos = async() => {
    setLoading(true)
    await fetch(`http://localhost:4000/orders/${mesa.id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(productStatus)
    }).then(response => response.json()).then(data => setLoading(false))
  }

  const handleSubmit = async(producto) => {
    yaTa(producto, mesa)
    await fetchProductos()
  }

  useEffect(() => {
    fetchProductos()
  }, [])
  if (loading) {
    return <div>Holi</div>
  } else {
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
}
