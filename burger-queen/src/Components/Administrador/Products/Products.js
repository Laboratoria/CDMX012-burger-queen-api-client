import { useState } from 'react'

export default function Products({ singleProduct, newProduct, setNewProduct, setMain, setAside, products }) {
  // Este es el componente de aside que crea productos
  const [editingProduct, setEditingProduct] = useState({
    name: singleProduct.name,
    price: singleProduct.price,
    melPrep: singleProduct.melPrep,
    description: singleProduct.description,
    recipe: singleProduct.recipe,
    urlImg: singleProduct.urlImg,
    category: singleProduct.category
  })
  const updateStatus = (editingProduct) => {
    fetchProductos({ ...editingProduct, editingProduct })
    setEditingProduct({ ...editingProduct, editingProduct })
  }
  const fetchProductos = async (productStats) => {
    await fetch(`http://localhost:4000/products/${singleProduct.id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(editingProduct)
    }).then(response => response.json()).then(console.log('actualizado'))
  }
  console.log(singleProduct)
  const setTheFunction = (e) => {
    e.preventDefault()
    console.log(singleProduct)
    if (singleProduct === null) {
      handleSubmit(e)
    } else {
      updateStatus()
      console.log('whasaaa editanding')
    }
  }
  const setTheOnChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    console.log(name, value)
    console.log(singleProduct)
    if (singleProduct === null) {
      setNewProduct({ ...newProduct, [name]: value })
    } else {
      setEditingProduct({ ...editingProduct, [name]: value })
      console.log('whasaaa editanding')
    }
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
    body: JSON.stringify(
      newProduct,
      console.log(newProduct)
    )
  }
  const postCommand = () => {
    fetch('http://localhost:4000/products', prueba)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <section>
      <h2>Agregar producto</h2>
      <form onSubmit={() => { setTheFunction() }}>
        <input type='text' id='productName'
          name='name'
          className='input_product'
          value={editingProduct.name}
          placeholder='Huevos'
          onChange={(e) => setTheOnChange(e)} />
        <input type='number' id='productPrice'
          name='price'
          className='input_product'
          value={editingProduct.price}
          placeholder='$8'
          onChange={(e) => setTheOnChange(e)} />
        <select placeholder='5min -10min'
          name='melPrep'
          value={editingProduct.melPrep}
          onChange={(e) => setTheOnChange(e)}>
          <option value='5min-10min'>5min - 10min</option>
          <option value='10min-15min'>10min - 15min</option>
          <option value='15min-20min'>15min - 20min</option>
          <option value='20min-25min'>20min - 25min</option>
          <option value='25min-30min'>25min - 30min</option>
        </select>
        <input type='text'
          name='description'
          id='productDescription'
          className='input_product'
          value={editingProduct.description}
          placeholder='Huevos, cebolla, tomate, cilantro'
          onChange={(e) => setTheOnChange(e)} />
        <textarea id='recipe'
          name='recipe'
          className='input_product'
          value={editingProduct.recipe}
          placeholder='Deliciosos huevos revueltos super cremosos con tomate, cebolla y cilantro.'
          onChange={(e) => setTheOnChange(e)} />
        <select
          name='category'
          value={editingProduct.category}
          onChange={(e) => setTheOnChange(e)}>
          <option value='breakfast'>Desayuno</option>
          <option value='breakfast'>Desayuno</option>
          <option value='lunch'>Comida</option>
        </select>
        <input type='text'
          name='urlImg'
          id='productImage'
          className='input_product'
          value={editingProduct.urlImg}
          placeholder='www.tuimagen.com'
          onChange={(e) => setTheOnChange(e)} />
        <button onClick={(e) => { setTheFunction(e) }}>Agregar producto</button>
      </form>
    </section>
  )
}
