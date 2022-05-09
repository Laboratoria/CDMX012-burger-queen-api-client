import {PrivateRoutes} from "./PrivateRoutes";
import {PublicRoutes} from "./PublicRoutes";
import {useState} from "react";

export const AppRouter = () =>
{
    const [isAuth, setIsAuth] = useState(true);

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