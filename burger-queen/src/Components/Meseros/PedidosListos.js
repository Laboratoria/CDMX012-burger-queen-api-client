export const PedidosListos = ({ table, products }) => {
  return (
        <>
        <div className='mesas_contenedor'>
        {products &&
          products.map((product) => (
            (product.status === 'kitchen')
              ? (<div key= {product.id}>
                <div >{table }</div>
                <div >{product.name}</div>
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
