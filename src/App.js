
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "./lib/firebase-config";
import GlobalRouter from "./routers/GlobalRouters";


function App() {
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
    
    <section>
      <GlobalRouter isAuth={isAuth} />
    </section>

  );
}
export default App;
