/* eslint-disable indent */
import graybell from '../../Assets/icons/whiteBell.png'
export const OrdersReady = ({ rol, table, products }) => {
  return (
    <>
      <div className='tables_container'>
        {products &&
          products.map((product) => (
            (product.productStatus === 'ready')
              ? (<div className='tablesAside_table' key={product.id}>
                <div className='table_number'>{table}</div>
                <div className='product_table_name' >{product.name}</div>
                <div className='table_quantity' >{product.cantidad}</div>
                {rol === 'mesero'
                  ? (<img
                    src={graybell}
                    alt='bell'
                    className='icon_bell'
                  />)
                  : (
                    <div className='product_time'> 0:15 </div>
                  )
                }

              </div>
              )
              : undefined
          ))
        }
      </div>
    </>
  )
}
// asi se puede entrar mesas[0].productos[0].status
