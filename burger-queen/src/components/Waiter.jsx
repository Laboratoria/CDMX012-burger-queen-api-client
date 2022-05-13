import { Navigate, useNavigate } from 'react-router-dom';

export default  function WaiterPage () {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/menu')
    }
    return(
        <h1>Waiter</h1>     
    )
}