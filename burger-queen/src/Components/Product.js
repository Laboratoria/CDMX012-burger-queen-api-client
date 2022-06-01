import '../styles/Product.css'
export const Product = ({ product, setOrder, order }) => {
  // const quepex = product.name
  return (
   // <div className='tarjeta_producto' key={product.id} onClick={() => { setOrder(oldArrat => [...oldArrat, { name: product.name, price: product.price, id: product.id, cant: 1 }]) }}>
   <div className='tarjeta_producto' key={product.id} onClick={() => { setOrder({ ...order, productos: [...order.productos, product] }) }}>
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
