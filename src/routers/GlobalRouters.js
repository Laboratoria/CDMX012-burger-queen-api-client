import PrivateRoutes from "./PrivateRouters";
import PublicRoutes from "./PublicRoutes";

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