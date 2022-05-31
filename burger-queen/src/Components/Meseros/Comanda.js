import '../../styles/Comanda.css'
import { useState } from 'react'
export const EnviarComanda = ({ order }) => {
  console.log(order)
  const productValues = {
    name: order.name,
    price: order.price,
    id: order.id,
    cantidad: order.cant
  }
  console.log(productValues)
  const [products] = useState(productValues)
  console.log(products)
  const initialState = {
    productos: [products],
    table: '',
    clientName: '',
    startTime: '',
    price: order.price,
    orderId: order.id
  }
  const [finishOrder] = useState(initialState)
  console.log(finishOrder)
  return (
        <div className='contenedor_de_comanda'>
        <h1>Número de orden</h1>
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
        <section>
          <p></p>
          </section>
        <button className='btn_comanda'>Enviar Comanda </button>
        </div>
  )
}
