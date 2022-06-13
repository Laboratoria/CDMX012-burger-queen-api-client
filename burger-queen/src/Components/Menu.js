import '../styles/ListProducts.css'
import { useState, useEffect } from 'react'
import { Product } from './Product'
import Add from '../Assets/icons/yelowAdd.png'

export const Menu = ({ setNewProduct, rol, order, setOrder, setMain, setAside, handleMain }) => {
  const [menu, setMenu] = useState('breakfast')
  const [products, setProducts] = useState(null)

  const handleAside = () => {
    setMain('Menu')
    setAside('FormProducts')
  }

  const getData = async () => {
    const url = 'http://localhost:4000/products'
    const getFetchData = await fetch(url).then((resul) => resul.json())
    const filteredProducts = getFetchData.filter(
      (product) => product.category === menu && product
    )
    setProducts(filteredProducts)
  }

  useEffect(() => {
    getData()
  }, [menu])

  return (
    <>
      <div className='nav_menu'>
        <section className={`${menu === 'breakfast' ? 'active' : 'inactive'}`} onClick={() => setMenu('breakfast')}>
          Desayunos
        </section>
        <div className={`${menu === 'lunch' ? 'active' : 'inactive'}`} onClick={() => setMenu('lunch')}>
          Comidas
        </div>
      </div>
      <div className='products_container'>
        {products &&
          products.map((product) => (
            <Product setNewProduct={setNewProduct} rol={rol} product={product} key={product.id} setOrder={setOrder} order={order} handleMain={handleMain} setAside={setAside} />
          ))}
        {rol === 'admin' && (<img src={Add} alt='Add' className='icon_Add' onClick={() => { handleAside() }} />)}
      </div>
    </>
  )
}
