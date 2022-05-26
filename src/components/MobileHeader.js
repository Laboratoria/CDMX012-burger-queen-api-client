import '../css/Menu.css'
import { useNavigate } from "react-router-dom";

export default function MobileHeader(){
    const navigate = useNavigate();
    const returnLogin = () => {
        navigate("/");
      };
    return(
        <header className='header-container'>
            <img className="logo" alt='logoBQ' src={require('../assets/burger4.png')}/>
            <p>Menu</p>
            <button>Menu</button>    
            <button>Order</button>    
            <button onClick={returnLogin}>Sign Out </button>
        </header>
    )
}