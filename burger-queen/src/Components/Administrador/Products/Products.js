export default function Products ({ newProduct, setNewProduct, setMain, setAside }) {
  const handleSubmit = (e) => {
    e.preventDefault()
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
            <form onSubmit={handleSubmit}>
                <input type='text' id='productName'
                 className='input_product'
                 placeholder='Huevos'
                 onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                <input type='number' id='productPrice'
                className='input_product'
                placeholder='$8'
                onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })} />
                <select placeholder='5min -10min'
                onChange={(e) => setNewProduct({ ...newProduct, melPrep: e.target.value })}>
                    <option value='5min-10min'>5min - 10min</option>
                    <option value='10min-15min'>10min - 15min</option>
                    <option value='15min-20min'>15min - 20min</option>
                    <option value='20min-25min'>20min - 25min</option>
                    <option value='25min-30min'>25min - 30min</option>
                </select>
                <input type='text'
                id='productDescription'
                className='input_product'
                placeholder='Huevos, cebolla, tomate, cilantro'
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}/>
                <textarea id='productRecipe'
                className='input_product'
                placeholder= 'Deliciosos huevos revueltos super cremosos con tomate, cebolla y cilantro.'
                onChange={(e) => setNewProduct({ ...newProduct, recipe: e.target.value })}/>
                <select onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
                    <option value='breakfast'>Desayuno</option>
                    <option value='breakfast'>Desayuno</option>
                    <option value='lunch'>Comida</option>
                </select>
                <input type='text'
                id='productImage'
                className='input_product'
                placeholder='www.tuimagen.com'
                onChange={(e) => setNewProduct({ ...newProduct, urlImg: e.target.value })}/>
                <button onClick={(e) => { handleSubmit(e) }}>Agregar producto</button>
            </form>
        </section>
  )
}
