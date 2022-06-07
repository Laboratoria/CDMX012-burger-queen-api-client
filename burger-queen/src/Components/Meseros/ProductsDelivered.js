export const ProductsDelivered = ({ table, products }) => {
  return (
    <>
        <div className='mesas_contenedor'>
        {products &&
          products.map((product) => (
            (product.productStatus === 'delivery')
              ? (<div className='mesas_table' key= {product.id}>
                <div className='mesa_table'>{ table }</div>
                <div className='productdeliveredTable_name' >{product.name}</div>
                <div className='mesa_cant' >{product.cantidad}</div>

              </div>
                )
              : undefined
          ))
        }
      </div>
          </>
  )
}
