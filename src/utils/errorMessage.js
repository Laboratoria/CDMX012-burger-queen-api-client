
import {useState, React} from "react";

export const LoginError = (error) => {
    const [txt, setTxt] = useState("");
    if (error === 'auth/user-not-found') {
        setTxt(<p> 'This account doesnt exist.' </p>); 
    } else if (error === 'auth/invalid-email') {
        setTxt(<p> 'Invalid e-mail address, please try another one.' </p>); 
    } else if (error === 'auth/wrong-password') {
        setTxt(<p> 'Your password must be at least 6 characters long.'</p>); 
    } else if (error === 'auth/internal-error') {
        setTxt(<p> 'An error has occurred, please try again.' </p>); 
    }
    return(
        <>
        {txt}
        </>
    )
};

