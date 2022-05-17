import { useEffect } from 'react';
import { useAuth } from '../context/AutProvider';

export default  function WaiterPage () {

    const { logout } = useAuth();

    // const navigate = useNavigate();
     useEffect(() => {
         const getUsers = async () => {
             fetch("https://jsonplaceholder.typicode.com/users")
             .then(response => response.json())
             .then(data => {
                 console.log(data);
             })
         };
         getUsers().catch(null);
     }, [])

    const handleClick = async () => {
        await logout();
    }



    return(
        <><h1>Waiter</h1>
        <button typeof='submit' onClick={handleClick}> Cerrar Sesión</button>
        </>
    )
}