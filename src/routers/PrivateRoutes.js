import {
    Routes,
    Route,
} from "react-router-dom";
import { Orders } from '../pages/Orders';
import { createAccWithEmail} from "../lib/firebaseAuth";
import { CreateAcc } from '../pages/CreateAcc';

export const PrivateRoutes = () => {
    return(
        <Routes>
            <Route path="/createacc" element={<CreateAcc createAccWithEmail={createAccWithEmail}/>} />
            <Route path="/" element={<Orders/>} />
        </Routes>
    );
}