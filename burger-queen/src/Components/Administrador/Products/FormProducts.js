/* eslint-disable indent */
import { useState } from 'react'
import './Products.css'

export default function FormProducts({ newProduct, setMain, setAside }) {
  const [currentProduct, setCurrentProduct] = useState(newProduct)
  console.log(currentProduct)
  const updateStatus = () => {
    setCurrentProduct({ ...currentProduct, currentProduct })
    fetchProductos({ ...currentProduct, currentProduct })
  }
  const fetchProductos = async (productStats) => {
    await fetch(`http://localhost:4000/products/${currentProduct.id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(currentProduct)
    })
      .then((response) => response.json())
      .then(console.log('actualizado'))
  }

  const setTheFunction = (e) => {
    e.preventDefault()
    if (newProduct === null) {
      handleSubmit(e)
      setAside(null)
      console.log('nuevo producto')
    } else {
      updateStatus()
      setAside(null)
      console.log('edit producto')
    }
  }
  const setTheOnChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setCurrentProduct({ ...currentProduct, [name]: value })
  }

  const handleSubmit = (e) => {
    postCommand()
    setMain('Menu')
    setAside(null)
  }

  // const prueba = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(currentProduct)
  // }
  const postCommand = () => {
    fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentProduct)
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(console.log('nuevo'))
  }

  const deleteProduct = (id) => {
    fetch(`http://localhost:4000/products/${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then(console.log('ELIMINADO'))
  }

  return (
    <>
      {newProduct === null
      ? <section className='form_products'>
          <h2>Agregar producto</h2>
          <form onSubmit={(e) => { setTheFunction(e) }}>
            <input type='text' id='productName' className='input_product' name='name'placeholder='Nombre del producto'
            onChange={(e) => setTheOnChange(e)}/>
            <input type='number' id='productPrice' className='input_product' name='price' placeholder='Precio del producto'
              onChange={(e) => setTheOnChange(e)}/>
            <select className='select_product' name='melPrep'placeholder='Tiempo de preparacion'
              onChange={(e) => setTheOnChange(e)}>
              <option value='b5min-5min-10min' className="label">Tiempo de preparacion</option>
              <option value='5min-10min'>5min - 10min</option>
              <option value='10min-15min'>10min - 15min</option>
              <option value='15min-20min'>15min - 20min</option>
              <option value='20min-25min'>20min - 25min</option>
              <option value='25min-30min'>25min - 30min</option>
            </select>
            <input type='text' id='productDescription' className='input_product' name='description' placeholder='Descripciòn del producto'
              onChange={(e) => setTheOnChange(e)} />
            <textarea className='textarea_product' id='recipe' name='recipe' placeholder='Receta del producto'
              onChange={(e) => setTheOnChange(e)} />
            <select name='category' className='select_product' placeholder='Tipo de menu'
              onChange={(e) => setTheOnChange(e)}>
              <option value='breakfast' className="label">Tipo de menu</option>
              <option value='breakfast'>Desayuno</option>
              <option value='lunch'>Comida</option>
            </select>
            <input type='text' name='urlImg' id='productImage' className='input_product' placeholder='Imagen del producto'
              onChange={(e) => setTheOnChange(e)} />
            <button className='btn_products' onClick={(e) => { setTheFunction(e) }}> Agregar producto </button>
          </form>
        </section>
      : <section className='form_products'>
      <h2>Actualizar producto</h2>
      <form onSubmit={(e) => { setTheFunction(e) }}>
        <input type='text' id='productName' className='input_product' name='name' value={currentProduct.name}
        onChange={(e) => setTheOnChange(e)}/>
        <input type='number' id='productPrice' className='input_product' name='price' value={currentProduct.price}
          onChange={(e) => setTheOnChange(e)}/>
        <select className='select_product' name='melPrep' value={currentProduct.melPrep}
          onChange={(e) => setTheOnChange(e)}>
          <option disabled >Tiempo de preparacion</option>
          <option value='5min-10min'>5min - 10min</option>
          <option value='10min-15min'>10min - 15min</option>
          <option value='15min-20min'>15min - 20min</option>
          <option value='20min-25min'>20min - 25min</option>
          <option value='25min-30min'>25min - 30min</option>
        </select>
        <input type='text' id='productDescription' className='input_product' name='description' value={currentProduct.description}
          onChange={(e) => setTheOnChange(e)} />
        <textarea className='textarea_product' id='recipe' name='recipe' value={currentProduct.recipe}
          onChange={(e) => setTheOnChange(e)} />
        <select name='category' className='select_product' value={currentProduct.category}
          onChange={(e) => setTheOnChange(e)}>
          <option disabled >Tipo de menu</option>
          <option value='breakfast'>Desayuno</option>
          <option value='lunch'>Comida</option>
        </select>
        <input type='text' name='urlImg' id='productImage' className='input_product' value={currentProduct.urlImg}
          onChange={(e) => setTheOnChange(e)} />
        <button className='btn_products' onClick={(e) => { setTheFunction(e) }}> Actualizar producto </button>
        <button className='btn_products' id='btn_delete_products' onClick={() => { deleteProduct(currentProduct.id) }} > Eliminar producto </button>
      </form>
    </section>
      }
    </>
  )
}
