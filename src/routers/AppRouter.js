import {PrivateRoutes} from "./PrivateRoutes";
import {PublicRoutes} from "./PublicRoutes";
import {useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AppRouter = () =>
{
    const [isAuth, setIsAuth] = useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        setIsAuth(user);
    } else {
        setIsAuth(null);
    }
    });
    

    return (
        <>
            {
                isAuth ?
                <PrivateRoutes/> :
                    <PublicRoutes setIsAuth={setIsAuth} />
            }

        </>
    );
}