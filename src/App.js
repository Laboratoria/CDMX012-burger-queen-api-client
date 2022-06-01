
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "./lib/firebase-config";
import PrivateRoutes from "./routers/PrivateRouters";

function App() {
  const [isAuth, setIsAuth] = useState(null);
  // const [rol, setRol] = useState(null);
  const auth = getAuth();

  const handleAllSesion =(user,rol)=>
  {
    setIsAuth({user,rol})
  }

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    console.log('algo')
    if (user) {
      const userEmail = user.email;
      const initial = userEmail[0];
      if (initial === "a") {
        handleAllSesion(user, 'admin');
        console.log(isAuth)
      } else if (initial === "w") {
        setIsAuth({rol:"waiter",user:user});
      } else if (initial === "c") {
        setIsAuth({rol:"chef",user:user});
      }
    }else {
      setIsAuth(null)
    }
  });
}, [])


  return (
    
    <section>
      <PrivateRoutes isAuth={isAuth} />
    </section>

  );
}
export default App;
