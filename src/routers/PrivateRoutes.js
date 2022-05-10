import {
    Routes,
    Route,
} from "react-router-dom";
import { Orders } from '../components/screenComponents/Orders';
import { createAccWithEmail, logOut } from "../lib/firebaseAuth";
import { CreateAcc } from '../components/screenComponents/CreateAcc';

export const PrivateRoutes = () => {
    return(
        <Routes>
            <Route path="/createacc" element={<CreateAcc createAccWithEmail={createAccWithEmail}/>} />
            <Route path="/" element={<Orders logOut={logOut}/>} />
        </Routes>
    );
}