import '../styles/Product.css'
export const Product = ({ product }) => {
  console.log(product)
  return (
    <div className='tarjeta_producto' key={product.id}>
      <img className='imagen_producto' src={product.urlImg}></img>
      <div className='descripcion_producto'>
        <h2 className='nombre_producto'>{product.name}</h2>
        <div className='informacion_numerica'>
          <p className='tiempo_producto'>{product.melPrep}</p>
          <p className='precio_producto'>${product.price}</p>
        </div>
      </div>
    </div>
  )
}
