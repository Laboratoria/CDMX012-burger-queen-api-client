import { StatusProducto } from '../Meseros/StatusProducto'
import '../../styles/ProductsControl.css'

export const ProductosListos = ({ rol, mesas, setMesas }) => {
  return (
    <section className='productsControl_container'>
      <section className='ProductReady_Container'>
        <p className='productsControl_title'>
          <b>Productos Listos</b>
        </p>
        <div className=' Products_table'>
          <p className='productsControl_subtittle'> Mesa | Producto</p>
          <p className='productsControl_subtittle1'> Cantidad | Tiempo</p>
        </div>
        <div className='scroll'>
          <StatusProducto rol={rol} mesas={mesas} setMesas={setMesas} />
        </div>
      </section>
    </section>
  )
}
