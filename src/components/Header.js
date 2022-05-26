import '../css/Menu.css'
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();
    const returnLogin = () => {
        navigate("/");
      };
    return(
        <header className='header-container'>
            <img className="logo" alt='logoBQ' src={require('../assets/burger4.png')}/>
            <p className='menu'>Menu</p>
            <button className='btnHeader'>Menu</button>    
            <button className='btnHeader2'>Order</button>    
            <button className='btnOut' onClick={returnLogin}/>
        </header>
    )
}