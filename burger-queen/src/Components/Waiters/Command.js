import '../../styles/Command.css'
// import { useState } from 'react'
import iconDelete from '../../Assets/icons/delete.png'
import iconAdd from '../../Assets/icons/add.png'
import iconLess from '../../Assets/icons/less.png'
import { useEffect } from 'react'

export const Command = ({ totalOrders, order, setOrder, setMain, setAside }) => {
  const dataInfo = order

  const { productos } = order
  const totalPrices = productos.map((product) => {
    return product.price * product.cantidad
  })
  const initialValue = 0
  const fullAccount = totalPrices.reduce((a, b) => a + b, initialValue)

  const quantityProducts = productos.map((product) => {
    return product.cantidad
  })
  const initialQuantity = 0
  const totalQuantity = quantityProducts.reduce(
    (a, b) => a + b,
    initialQuantity
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
      setOrder({ ...order, orderId: totalOrders[totalOrders.length - 1].orderId + 1, totalProducts: totalQuantity, totalPrice: fullAccount })
    }
  }, [fullAccount, totalQuantity])

  const postCommand = () => {
    fetch('http://localhost:4000/orders', prueba)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  const handleSubmitCommand = (e) => {
    e.preventDefault()
    postCommand()
    setMain('Mesas')
    setAside('null')
  }

  const handleAdd = (currentProduct) => {
    const id = order.productos.findIndex((product) => {
      return product.id === currentProduct.id
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
    <div className='container_of_command'>
      <h1 className='orderTitle'> Orden # {order.orderId} </h1>
      <select
        className='table'
        id='table_id'
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
        className='input_command_form'
        id='inputName'
        onChange={(e) => setOrder({ ...order, clientName: e.target.value })}
      ></input>
      <div className='title_products'>
        <p>Producto</p>
        <div className='title_total'>
          <p>Total</p>
          <p>Eliminar</p>
        </div>
      </div>
      <section className='container_products'>
        {productos.map((product, index) => (
          <section className='producto_order' key={`${index}${product.id}`}>
            <img
              src={iconDelete}
              alt='Delete'
              className='icon_tabcell'
              id='background_yelow'
              onClick={() => handleDelete(product, true)}
            />
            <div className='product_name'>{product.name}</div>
            <section className='container_buttons'>
              <img
                src={iconAdd}
                alt='Add'
                className='icon_tabcell'
                id='background_gray'
                onClick={() => handleAdd(product)}
              />
              <div className='product_quantity'> {product.cantidad}</div>
              <img
                src={iconLess}
                alt='Add'
                className='icon_tabcell'
                id='background_yelow'
                onClick={() => handleDelete(product)}
              />
            </section>
          </section>
        ))}
      </section>

      <section className='section_resume'>
        <div className='total'>Total $ {fullAccount}</div>
        <button className='btn_command' onClick={(e) => handleSubmitCommand(e)}>
          Enviar Comanda{' '}
        </button>
      </section>
    </div>
  )
}
