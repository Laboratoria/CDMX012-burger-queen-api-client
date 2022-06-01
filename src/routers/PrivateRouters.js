import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu"
import Chef from "../components/Chef";
import Personal from "../components/Personal";
import Login from "../components/Login";


const PrivateRoutes = ({isAuth}) => {
    return (<Routes>
      {
        isAuth?
          isAuth.rol === 'admin'?
            <Route path="/" element={<Personal />} />
            :isAuth.rol === 'waiter'?
            <Route path="/" element={<Menu />} />
            :<Route path="/" element={<Chef />} />
          :
        <Route path="/" element={<Login />} />
      }
      </Routes>
    );
};

export default PrivateRoutes;
