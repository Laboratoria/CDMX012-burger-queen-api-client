import { useAuth } from '../context/AutProvider';

export default  function WaiterPage () {

    const { logout } = useAuth();

    // const navigate = useNavigate();

    const handleClick = async () => {
        await logout();
    }

    return(
        <><h1>Waiter</h1>
        <button typeof='submit' onClick={handleClick}> Cerrar Sesión</button>
        </>
    )
}