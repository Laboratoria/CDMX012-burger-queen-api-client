import '../../styles/Comanda.css'
// import { useState } from 'react'
import iconDelete from '../../Assets/icons/delete.png'
import iconAdd from '../../Assets/icons/add.png'
import iconLess from '../../Assets/icons/less.png'
export const EnviarComanda = ({ order, setOrder }) => {
  const dataInfo = order
  console.log(order)
  const { productos } = order
  console.log(productos)
  const totalPrices = []
  const totalCantidad = []
  const totalProducts = productos.map((producto) => (totalPrices.push(producto.price * producto.cantidad, totalCantidad.push(producto.cantidad + ' ' + producto.name))))
  console.log(totalProducts)
  const valorinicial = 0
  const totalCuenta = totalPrices.reduce((a, b) => a + b, valorinicial)

  const prueba = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      dataInfo
    )
  }

  const postComanda = () => {
    fetch('http://localhost:4000/orders', prueba)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  const handleSubmit = async () => {
    setOrder({ ...order, price: totalCuenta, cantidad: totalCantidad })
    await postComanda()
  }
  // console.log(holi)
  /* const productValues = {
    name: order.name,
    price: order.price,
    id: order.id,
    cantidad: order.cant
  }
  const [products] = useState(productValues)
  const initialState = {
    productos: [products],
    table: '',
    clientName: '',
    startTime: '',
    price: order.price,
    orderId: order.id
  }
  const [finishOrder] = useState(initialState)
  console.log(finishOrder) */
  return (
    <div className='contenedor_de_comanda'>
      <h1 className='orderTitle'> Orden # 1 </h1>
      <select className='mesa' id='table'
      onChange={(e) => setOrder({ ...order, table: e.target.value })}>
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
            <img src={iconDelete} alt='Delete' className='icon_tabcell' id='background_yelow'/>
            <div className='product_name'>{producto.name}</div>
            <section className='contenedor_botones'>
              <img src={iconAdd} alt='Add' className='icon_tabcell' id='background_gray' />
              <div className='producto_cantidad'> {producto.cantidad}</div>
              <img src={iconLess} alt='Add' className='icon_tabcell' id='background_yelow' />
            </section>
          </section>
        ))}
      </section>

      <section className='section_resumen'>
      <div className='total'>Total $ {totalCuenta}</div>
      <button className='btn_comanda' onClick={() => handleSubmit()} >Enviar Comanda </button>
      </section>
    </div>
  )
}
