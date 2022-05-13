import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AutProvider";

export function ProtectedRoute({children}){
    const {user} = useAuth();
    if(!user)return<Navigate to = "/" />;
        return<>{children}</>
            } 

        