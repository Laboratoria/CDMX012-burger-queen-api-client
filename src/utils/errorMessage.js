import { React } from "react";

export const LoginError = ({errorMsg}) => {
    let txt = '';
    
    if (errorMsg === 'auth/user-not-found') {
        txt = <p className="error-msg">This account does not exist, contact your manager for further information.</p>; 
    } else if (errorMsg === 'auth/invalid-email') {
        txt = <p className="error-msg">Invalid e-mail address, please try another one.</p>; 
    } else if (errorMsg === 'auth/wrong-password') {
        txt = <p className="error-msg" data-testid="error-msg">Wrong password, please check your spelling and try again.<br></br> 
        If the error continues contact your manager.</p>; 
    } else {
        txt = <p className="error-msg">An error has occurred, please try again.</p>; 
    }

    return(
        <>
            {txt}
        </>
    )
};
