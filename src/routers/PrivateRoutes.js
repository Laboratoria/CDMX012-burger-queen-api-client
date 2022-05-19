import {
    Routes,
    Route,
} from "react-router-dom";
import { Orders } from '../pages/Orders';
import { createAccWithEmail } from "../lib/firebaseAuth";
import { CreateAcc } from '../pages/CreateAcc';
import { Mainscreen } from '../pages/Main screen/mainScreen'
import { ActiveOrders } from '../pages/ActiveOrders';
import { VerifyOrder } from '../pages/VerifyOrder/VerifyOrder'

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/createacc" element={<CreateAcc createAccWithEmail={createAccWithEmail} />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<Mainscreen />} />
            <Route path="/activeorders" element={<ActiveOrders />} />
            <Route path="/createacc" element={<CreateAcc createAccWithEmail={createAccWithEmail} />} />
            <Route path="/verify-order" element={<VerifyOrder />} />
        </Routes>
    );
}