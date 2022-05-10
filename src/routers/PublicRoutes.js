import {
    Routes,
    Route,
  } from "react-router-dom";
import {Login} from '../components/screenComponents/Login';
import { loginWithEmail } from "../lib/firebaseAuth";

export const PublicRoutes = ({setIsAuth}) => {
  return(
      <Routes>
          <Route path="/" element={<Login loginWithEmail={loginWithEmail}/>} />
      </Routes>
  );
}