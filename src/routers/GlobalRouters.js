import PrivateRoutes from "./PrivateRouters";
import PublicRoutes from "./PublicRoutes";
import React from "react";

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