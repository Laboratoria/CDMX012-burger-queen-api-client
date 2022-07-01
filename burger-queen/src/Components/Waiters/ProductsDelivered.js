export const ProductsDelivered = ({ table, products }) => {
  return (
    <>
      <div className='tables_container'>
        {products &&
          products.map((product) => (
            (product.productStatus === 'delivery')
              ? (<div className='tablesAside_table' key={product.id}>
                <div className='table_number'>{table}</div>
                <div className='productdeliveredTable_name' >{product.name}</div>
                <div className='table_quantity' >{product.cantidad}</div>

              </div>
                // eslint-disable-next-line indent
              )
              : undefined
          ))
        }
      </div>
    </>
  )
}
