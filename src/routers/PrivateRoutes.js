import {
    Routes,
    Route,
} from "react-router-dom";
import { Orders } from '../components/screenComponents/Orders';
import { logOut } from "../lib/firebaseAuth";

export const PrivateRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Orders logOut={logOut}/>} />
        </Routes>
    );
}