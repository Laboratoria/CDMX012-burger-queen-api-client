import { React } from "react";

export const LoginError = ({errorMsg}) => {
    let txt = '';
    
    if (errorMsg === 'auth/user-not-found') {
        txt = <p>This account does not exist.</p>; 
    } else if (errorMsg === 'auth/invalid-email') {
        txt = <p>Invalid e-mail address, please try another one.</p>; 
    } else if (errorMsg === 'auth/wrong-password') {
        txt = <p>Invalid e-mail or password.</p>; 
    } else {
        txt = <p>An error has occurred, please try again.</p>; 
    }

    return(
        <>
            {txt}
        </>
    )
};
