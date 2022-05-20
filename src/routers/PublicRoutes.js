import {
  Routes,
  Route,
} from "react-router-dom";
import { LogIn } from '../pages/LogIn/LogIn';
import { signInWithEmail } from "../lib/firebaseAuth";
import { Navigate } from "react-router-dom";


export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn signInWithEmail={signInWithEmail} />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}