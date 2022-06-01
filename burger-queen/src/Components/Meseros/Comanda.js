import '../../styles/Comanda.css'
// import { useState } from 'react'
export const EnviarComanda = ({ order }) => {
  const { productos, orderId } = order

  console.log(productos)
  console.log(orderId)
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
        <h1> Orden # </h1>
        <select className='mesa' id='table'>
            <option >Seleccionar mesa </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </select>
        <input type='text'placeholder="Nombre del Cliente" className='input_form'></input>
        <div className='titulo_productos'>
          <p>Producto</p>
          <div className='titulo_total'>
            <p>Total</p>
          <p>Eliminar</p>
          </div>
        </div>
        <section className='contenedor_productos'>{productos.map((producto, index) => (
          <section className='producto_orden' key={ `${index}${producto.id}` }>
          <p>{ producto.name }</p>
          <section className='contenedor_botones'>
          <p className='producto_cantidad'>1</p>
          <button className='producto_boton'>-</button>
          </section>
          </section>
        ))}
          <p></p>
        </section>
        <button className='btn_comanda'>Enviar Comanda </button>
        </div>
  )
}
