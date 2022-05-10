import {
    Routes,
    Route,
  } from "react-router-dom";
import { LogIn } from '../components/screenComponents/LogIn';
import { signInWithEmail } from "../lib/firebaseAuth";


export const PublicRoutes = () => {
  return(
      <Routes>
          <Route path="/" element={<LogIn signInWithEmail={signInWithEmail} />} />
      </Routes>
  );
}