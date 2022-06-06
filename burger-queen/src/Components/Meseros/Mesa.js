import '../../styles/Mesa.css'
export const Mesa = ({ mesa }) => {
  return (
<div className= 'mesa-contenedor' key={mesa.id}>
  <table className='datos-mesa'>
  <thead>
  <tr><th id='titulo-mesa'>Mesa{mesa.table}{mesa.startTime}</th>
  </tr>
  </thead>
  <tbody>
    <tr><td>Cliente:</td>{mesa.clientName}<td></td></tr>
    <tr><td>Hora:</td>{mesa.startTime}<td></td></tr>
    <tr><td>Productos:</td>{mesa.totalProducts}<td></td></tr>
    <tr><td>Total:</td>{mesa.totalPrice}<td></td></tr>
  </tbody>
  </table>
</div>
  )
}
