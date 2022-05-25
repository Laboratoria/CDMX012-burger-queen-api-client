import '../styles/ListProducts.css'
import { useState, useEffect } from 'react'
import { Product } from './Product'

export const ListProducts = () => {
  const [menu, setMenu] = useState('breakfast')
  const [products, setProducts] = useState(null)

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
        <div className={`${menu === 'breakfast' ? 'active' : 'inactive'}`} onClick={() => setMenu('breakfast')}>
          Desayunos
        </div>
        <div className={`${menu === 'lunch' ? 'active' : 'inactive'}`} onClick={() => setMenu('lunch')}>
          Comidas
        </div>
      </div>
      <div className='productos_contenedor'>
        {products &&
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </div>
    </>
  )
}
