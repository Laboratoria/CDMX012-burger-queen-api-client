import {
    Routes,
    Route,
} from "react-router-dom";
import { Orders } from '../components/screenComponents/Orders';

export const PrivateRoutes = () => {
    return(
        <Routes>
            <Route path="/Orders" element={<Orders/>} />
        </Routes>
    );
}