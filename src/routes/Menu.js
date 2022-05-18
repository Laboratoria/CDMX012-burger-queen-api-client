import { useNavigate } from "react-router-dom";
export default function Menu() {
  const navigate = useNavigate();
  const returnLogin = () => {
    navigate("/");
  };
  return (
    <section>
      <h1>Pagina en Proceso</h1>
      <button onClick={returnLogin}>Sign Out </button>
    </section>
  );
}
