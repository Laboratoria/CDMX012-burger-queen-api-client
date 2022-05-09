import {
    Routes,
    Route,
  } from "react-router-dom";
import {Login} from '../components/screenComponents/Login';

export const PublicRoutes = ({setIsAuth}) => {
  return(
      <Routes>
          <Route path="/" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
  );
}