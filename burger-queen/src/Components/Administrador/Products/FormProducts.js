/* eslint-disable indent */
// import { useState } from 'react'
import './Products.css'

export default function FormProducts({ newProduct, setNewProduct, setMain, setAside }) {
  console.log(newProduct)
  const updateStatus = () => {
    fetchProductos({ ...newProduct, newProduct })
    setNewProduct({ ...newProduct, newProduct })
  }
  const fetchProductos = async (productStats) => {
    await fetch(`http://localhost:4000/products/${newProduct.id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newProduct)
    })
      .then((response) => response.json())
      .then(console.log('actualizado'))
  }

  const setTheFunction = (e) => {
    e.preventDefault()
    if (newProduct === null) {
      handleSubmit(e)
    } else {
      updateStatus()
    }
  }
  const setTheOnChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  const handleSubmit = (e) => {
    postCommand()
    setMain('Menu')
    setAside(null)
  }

  const prueba = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  }
  const postCommand = () => {
    fetch('http://localhost:4000/products', prueba)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
  const deleteProduct = () => {
    fetch(`http://localhost:4000/products/${newProduct.id}`, {
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
          <form onSubmit={() => { setTheFunction() }}>
            <input type='text' id='productName' className='input_product' name='name'placeholder='Nombre del producto'
            onChange={(e) => setTheOnChange(e)}/>
            <input type='number' id='productPrice' className='input_product' name='price' placeholder='Precio del producto'
              onChange={(e) => setTheOnChange(e)}/>
            <select className='select_product' name='melPrep'placeholder='Tiempo de preparacion'
              onChange={(e) => setTheOnChange(e)}>
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
      <form onSubmit={() => { setTheFunction() }}>
        <input type='text' id='productName' className='input_product' name='name' value={newProduct.name}
        onChange={(e) => setTheOnChange(e)}/>
        <input type='number' id='productPrice' className='input_product' name='price' value={newProduct.price}
          onChange={(e) => setTheOnChange(e)}/>
        <select className='select_product' name='melPrep' value={newProduct.melPrep}
          onChange={(e) => setTheOnChange(e)}>
          <option value='5min-10min'>5min - 10min</option>
          <option value='10min-15min'>10min - 15min</option>
          <option value='15min-20min'>15min - 20min</option>
          <option value='20min-25min'>20min - 25min</option>
          <option value='25min-30min'>25min - 30min</option>
        </select>
        <input type='text' id='productDescription' className='input_product' name='description' value={newProduct.description}
          onChange={(e) => setTheOnChange(e)} />
        <textarea className='textarea_product' id='recipe' name='recipe' value={newProduct.recipe}
          onChange={(e) => setTheOnChange(e)} />
        <select name='category' className='select_product' value={newProduct.category}
          onChange={(e) => setTheOnChange(e)}>
          <option value='breakfast'>Desayuno</option>
          <option value='lunch'>Comida</option>
        </select>
        <input type='text' name='urlImg' id='productImage' className='input_product' value={newProduct.urlImg}
          onChange={(e) => setTheOnChange(e)} />
        <button className='btn_products' onClick={(e) => { setTheFunction(e) }}> Actualizar producto </button>
        <button className='btn_products' id='btn_delete_products' onClick={(e) => { deleteProduct() }} > Eliminar producto </button>
      </form>
    </section>
      }
    </>
  )
}
