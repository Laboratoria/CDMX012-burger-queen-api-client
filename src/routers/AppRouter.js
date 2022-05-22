import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import loading from '../assets/loading.gif'

export const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsAuth(user);
        } else {
            setIsAuth(null);
        }
        setIsLoading(false);
    });

    if (isLoading === true) {
        return (
            <>
            <img src={loading} alt="loading icon"></img>
            <h1>Loading...</h1>
            </>
        )
    }
    return (
        <>
            {
                isAuth ?
                    <PrivateRoutes /> :
                    <PublicRoutes />
            }

        </>
    );
}