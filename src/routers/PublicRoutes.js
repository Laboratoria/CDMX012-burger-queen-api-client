import Login from "../components/Login";
import {Routes, Route} from "react-router-dom"
import PrivateRoutes from "./PrivateRouters";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
    </Routes>
  );
};

export default PublicRoutes;

