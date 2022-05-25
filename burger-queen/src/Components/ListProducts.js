import '../styles/ListProducts.css'
import { useState, useEffect } from 'react'
import { Product } from './Product'

export const ListProducts = () => {
  const [products, setProducts] = useState(null)

  const getData = async () => {
    const url = 'http://localhost:4000/products'
    const getFetchData = await fetch(url).then((resul) => resul.json())
    setProducts(getFetchData)
  }

  useEffect(() => {
    getData()
  }, [])
  console.log(products)
  return (
    <div className='productos_contenedor'>
      {products && products.map((product) => (
        <Product product={product} key={product.id} />

      ))}
    </div>
  )
}
