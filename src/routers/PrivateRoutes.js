import {
    Routes,
    Route,
} from "react-router-dom";
import { Orders } from '../pages/Orders';
import { createAccWithEmail } from "../lib/firebaseAuth";
import { CreateAcc } from '../pages/CreateAcc';
<<<<<<< HEAD
import { Mainscreen } from '../pages/Main screen/mainScreen'
import { ActiveOrders } from '../pages/ActiveOrders';
=======
import { VerifyOrder } from '../pages/VerifyOrder/VerifyOrder'
>>>>>>> 2042c988723c9b55b1d7097ae67d5412b013b80e

export const PrivateRoutes = () => {
    return (
        <Routes>
<<<<<<< HEAD
            <Route path="/createacc" element={<CreateAcc createAccWithEmail={createAccWithEmail} />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<Mainscreen />} />
            <Route path="/activeorders" element={<ActiveOrders />} />
=======
            <Route path="/createacc" element={<CreateAcc createAccWithEmail={createAccWithEmail}/>} />
            <Route path="/" element={<Orders/>} />
            <Route path="/verify-order" element={<VerifyOrder/>} />
>>>>>>> 2042c988723c9b55b1d7097ae67d5412b013b80e
        </Routes>
    );
}