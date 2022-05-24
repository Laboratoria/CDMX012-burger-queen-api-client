import '../styles/HomePage.css'
import LogoBQB from '../Assets/Images/BQBlack.png'
import LogOut from '../Assets/icons/logOut.png'

// eslint-disable-next-line react/prop-types
export default function HomePage({ handleExit }) {
  const getDates = new Date()
  const DateHour = getDates.getHours() + ':' + getDates.getMinutes()
  return (
    <div className='home_container'>
      <header className='header_home'>
        <img src={LogoBQB} alt='Logo' className='logo_header' />
        <p className='nav1'><b>Mesas</b></p>
        <p className='nav1'>Menú</p>
        <img
          src={LogOut}
          alt='Logo'
          className='icon_header'
          onClick={() => {
            handleExit().then(() => console.log('cerraste sesion'))
          }}
        />
      </header>
      <div className='rol_info'>
        <p> <b>Mesero:</b> Nombre empleado aqui </p>
        <p> <b>Hora:</b> {DateHour} </p>
      </div>

      <main className='main_home'>main_home</main>
      <aside className="rol_aside"></aside>
    </div>
  )
}
