import '../styles/HomePage.css'

// eslint-disable-next-line react/prop-types
export default function HomePage({ handleExit }) {
  return (
    <div>

      <button id='logout-btn' onClick={() => { handleExit().then(() => console.log('cerraste sesion')) }}>Cerrar sesión</button>
    </div>

  )
}
