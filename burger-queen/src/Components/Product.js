import '../styles/Product.css'
export const Product = ({ product }) => {
  return (
    <div className='tarjeta_producto' key={product.id}>
      <img className='imagen_producto' src={product.urlImg}></img>
      <div className='descripcion_producto'>
        <div className='datos_producto'>
          <h2 className='nombre_producto'>{product.name}</h2>
          <p className='tiempo_producto'>{product.melPrep}</p>
        </div>
          <div className='precio_producto'>${product.price}</div>
      </div>
    </div>
  )
}
