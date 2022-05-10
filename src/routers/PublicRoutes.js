import {
    Routes,
    Route,
  } from "react-router-dom";
import { LogIn } from '../components/screenComponents/LogIn';


export const PublicRoutes = () => {
  return(
      <Routes>
          <Route path="/" element={<LogIn /* createAccWithEmail={createAccWithEmail} *//>} />
      </Routes>
  );
}