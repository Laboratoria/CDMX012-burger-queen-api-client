import {
    Routes,
    Route,
  } from "react-router-dom";
import { LogIn } from '../../src/components/screenComponents/LogIn/LogIn';
import { signInWithEmail } from "../lib/firebaseAuth";


export const PublicRoutes = () => {
  return(
      <Routes>
          <Route path="/" element={<LogIn signInWithEmail={signInWithEmail} />} />
      </Routes>
  );
}