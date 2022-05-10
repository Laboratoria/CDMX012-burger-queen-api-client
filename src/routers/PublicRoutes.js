import {
    Routes,
    Route,
  } from "react-router-dom";
import { CreateAcc } from '../components/screenComponents/CreateAcc';
import { loginWithEmail } from "../lib/firebaseAuth";

export const PublicRoutes = () => {
  return(
      <Routes>
          <Route path="/" element={<CreateAcc loginWithEmail={loginWithEmail}/>} />
      </Routes>
  );
}