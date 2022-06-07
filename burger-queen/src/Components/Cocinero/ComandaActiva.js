export const ComandaActiva = ({ mesa }) => {
  return (
  <div className= 'mesa-contenedor' key={mesa.id}>
    <table className='datos-mesa'>
    <thead>
    <tr><th id='titulo-mesa'>Mesa<br/>{mesa.table} </th><th id='titulo-tiempo'>{mesa.startTime}</th></tr>
    </thead>
    {mesa.productos.map((producto) => (
       <tbody key={producto.name}>
      <tr><td>{producto.cantidad}</td><td>{producto.name}<button>-</button></td></tr>
    </tbody>
    ))}
        </table>
  </div>
  )
}
