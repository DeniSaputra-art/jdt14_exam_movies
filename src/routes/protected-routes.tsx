import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");

  const tokenProtected = ["/", "/detail/:id", "/movie", "/tv-show"];
  const publicPage = ["/login"];

  if (tokenProtected.includes(pathname)) {
    if (!token) {
      return <Navigate to={"/login"} />;
    }
  }
  
  if (publicPage.includes(pathname)) {
    if (token) {
        return <Navigate to={"/"}/>
    }
  }
  
  return <Outlet />;
};

export default ProtectedRoutes;
