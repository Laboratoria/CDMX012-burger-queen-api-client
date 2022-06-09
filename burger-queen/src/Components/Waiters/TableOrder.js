import '../../styles/TableOrder.css'
export const TableOrder = ({ mesa }) => {
  return (
    <div className='container_table' key={mesa.id}>
      <table className='data_table'>
        <thead>
          <tr><th id='title_table'>Mesa{mesa.table} </th><th id='time_title'>{mesa.startTime}</th>
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
