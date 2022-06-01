import Login from "../components/Login";
import {Routes, Route} from "react-router-dom"

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
    </Routes>
  );
};

export default PublicRoutes;
