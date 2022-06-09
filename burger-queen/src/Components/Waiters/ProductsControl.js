import { StatusProduct } from '../Waiters/StatusProduct'
import { Delivered } from '../Waiters/Delivered'
import '../../styles/ProductsControl.css'

export const ProductsControl = ({ rol, mesas, setMesas }) => {
  return (
    <section className='productsControl_container'>
      <section className='ProductReady_Container'>
        <p className='productsControl_title'>
          <b>Pedidos Listos</b>
        </p>
        <div className=' Products_table'>
          <p className='productsControl_subtittle'> Mesa | Producto</p>
          <p className='productsControl_subtittle1'> Cantidad | Entregar</p>
        </div>
        <div className='scroll'>
          <StatusProduct rol={rol} mesas={mesas} setMesas={setMesas} />
        </div>
      </section>
      <section className='ProductReady_Container'>
        <p className='productsControl_title'>
          <b>Pedidos Entregados</b>
        </p>
        <div className=' Products_table'>
          <p className='productsControl_subtittle'> Mesa | Producto</p>
          <p className='productsControl_subtittle1'> Entregado</p>
        </div>
        <div className='scroll'>
          <Delivered mesas={mesas} setMesas={setMesas} />
        </div>
      </section>
    </section>
  )
}
