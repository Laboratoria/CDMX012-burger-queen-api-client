import graybell from '../../Assets/icons/whiteBell.png'
export const PedidosListos = ({ table, products }) => {
  return (
        <>
        <div className='mesas_contenedor'>
        {products &&
          products.map((product) => (
            (product.productStatus === 'ready')
              ? (<div className='mesas_table' key= {product.id}>
                <div className='mesa_table'>{ table }</div>
                <div className='productTable_name' >{product.name}</div>
                <div className='mesa_cant' >{product.cantidad}</div>
                <img
                  src={graybell}
                  alt='bell'
                  className='icon_bell'
                />
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
