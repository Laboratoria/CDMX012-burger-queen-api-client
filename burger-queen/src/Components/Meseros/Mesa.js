import '../../styles/Mesa.css'
export const Mesa = ({ mesa }) => {
  return (
<div className= 'mesa-contenedor' key={mesa.id}>
  <table className='datos-mesa'>
  <thead>
  <tr><th id='titulo-mesa'>Mesa{mesa.table} </th><th id='titulo-tiempo'>{mesa.startTime}</th>
  </tr>
  </thead>
  <tbody>
    <tr><td>Cliente:</td><td>{mesa.clientName}</td></tr>
    <tr><td>Hora:</td><td>{mesa.startTime}</td></tr>
    <tr><td>Productos:</td><td>{mesa.totalProducts}</td></tr>
    <tr><td>Total:</td><td>{mesa.totalPrice}</td></tr>
  </tbody>
  </table>
</div>
  )
}
