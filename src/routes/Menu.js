import { useNavigate } from "react-router-dom";
export default function Menu(){
    const navigate = useNavigate();
    const returnLogin = () => {
      navigate('/')
    }
return(
   
    <section>Pagina en Proceso
    <button onClick={returnLogin} >Sign Out </button>
        </section>
)
}