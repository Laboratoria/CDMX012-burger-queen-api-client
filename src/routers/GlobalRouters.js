import PrivateRoutes from "./PrivateRouters";
import PublicRoutes from "./PublicRoutes";
<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> 6ae6fefd02b8773f6b83b70b1de82258d19729fa

const GlobalRouter = ({isAuth}) => {
  return (
    <>
      {
        isAuth ?
          <PrivateRoutes /> :
          <PublicRoutes />
      }
    </>
  )
}

export default GlobalRouter;