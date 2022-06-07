import '../../styles/Comanda.css'
// import { useState } from 'react'
import iconDelete from '../../Assets/icons/delete.png'
import iconAdd from '../../Assets/icons/add.png'
import iconLess from '../../Assets/icons/less.png'
import { useEffect } from 'react'

export const Comanda = ({ totalOrders, order, setOrder, setMain, setAside }) => {
  const dataInfo = order

  const { productos } = order
  const totalPrices = productos.map((producto) => {
    return producto.price * producto.cantidad
  })
  const valorinicial = 0
  const totalCuenta = totalPrices.reduce((a, b) => a + b, valorinicial)

  const cantidadProductos = productos.map((producto) => {
    return producto.cantidad
  })
  const cantidadInicial = 0
  const totalCantidad = cantidadProductos.reduce(
    (a, b) => a + b,
    cantidadInicial
  )

  const prueba = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      dataInfo,
      console.log(dataInfo)
    )
  }

  useEffect(() => {
    // si hay ordenes, extrae el numero total y agrega 1 al contador OrderId
    if (totalOrders.length) {
      setOrder({ ...order, orderId: totalOrders[totalOrders.length - 1].orderId + 1, totalProducts: totalCantidad, totalPrice: totalCuenta })
    }
  }, [totalCuenta, totalCantidad])

  const postComanda = () => {
    fetch('http://localhost:4000/orders', prueba)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  const handleSubmitComanda = (e) => {
    e.preventDefault()
    postComanda()
    setMain('Mesas')
    setAside('null')
  }

  const handleAdd = (currentProduct) => {
    const id = order.productos.findIndex((producto) => {
      return producto.id === currentProduct.id
    })
    const updatedOrder = [...order.productos]
    for (const property in updatedOrder[id]) {
      if (property === 'cantidad') {
        updatedOrder[id][property] = updatedOrder[id][property] + 1
      }
    }
    setOrder({ ...order, productos: [...updatedOrder] })
  }

  const handleDelete = (currentProduct, deleteAll) => {
    const id = order.productos.findIndex((producto) => {
      return producto.id === currentProduct.id
    })
    const updatedOrder = [...order.productos]
    if (currentProduct.cantidad > 1 && !deleteAll) {
      for (const property in updatedOrder[id]) {
        if (property === 'cantidad') {
          updatedOrder[id][property] = updatedOrder[id][property] - 1
        }
      }
    } else {
      updatedOrder.splice(id, 1)
    }
    setOrder({ ...order, productos: [...updatedOrder] })
  }

  return (
    <div className='contenedor_de_comanda'>
      <h1 className='orderTitle'> Orden # {order.orderId} </h1>
      <select
        className='mesa'
        id='table'
        onChange={(e) => setOrder({ ...order, table: e.target.value })}
      >
        <option>Seleccionar mesa </option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
      </select>
      <input
        type='text'
        placeholder='Nombre del Cliente'
        className='input_comanda_form'
        id='inputNombre'
        onChange={(e) => setOrder({ ...order, clientName: e.target.value })}
      ></input>
      <div className='titulo_productos'>
        <p>Producto</p>
        <div className='titulo_total'>
          <p>Total</p>
          <p>Eliminar</p>
        </div>
      </div>
      <section className='contenedor_productos'>
        {productos.map((producto, index) => (
          <section className='producto_orden' key={`${index}${producto.id}`}>
            <img
              src={iconDelete}
              alt='Delete'
              className='icon_tabcell'
              id='background_yelow'
              onClick={() => handleDelete(producto, true)}
            />
            <div className='product_name'>{producto.name}</div>
            <section className='contenedor_botones'>
              <img
                src={iconAdd}
                alt='Add'
                className='icon_tabcell'
                id='background_gray'
                onClick={() => handleAdd(producto)}
              />
              <div className='producto_cantidad'> {producto.cantidad}</div>
              <img
                src={iconLess}
                alt='Add'
                className='icon_tabcell'
                id='background_yelow'
                onClick={() => handleDelete(producto)}
              />
            </section>
          </section>
        ))}
      </section>

      <section className='section_resumen'>
        <div className='total'>Total $ {totalCuenta}</div>
        <button className='btn_comanda' onClick={(e) => handleSubmitComanda(e)}>
          Enviar Comanda{' '}
        </button>
      </section>
    </div>
  )
}
