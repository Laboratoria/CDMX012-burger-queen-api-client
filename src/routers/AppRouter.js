import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
        return <h1>Cargando</h1>
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