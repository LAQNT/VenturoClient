// import React, { useEffect, useContext } from "react";
// import { Outlet, useNavigate, Navigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import Home from "../../pages/Home";

// const useAuth = () => {
//   const { role } = useContext(AuthContext);
//   return role;
// };

// const useSession = () => {
//   const adminSession = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (adminSession === "admin") {
//       navigate("/backoffice");
//     } else {
//       navigate("/");
//     }
//   }, [navigate, adminSession]);

//   return adminSession;
// };

// export default function ProtectedRoutes() {
//   const isAuthorized = useAuth();
//   console.log(isAuthorized);
//   const adminSession = useSession();

//   return isAuthorized === "admin" ? <Outlet /> : <Home />;
// }
import React, { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Login from "../../pages/Login";
import Home from "../../pages/Home";

const useAuth = () => {
  const { role } = useContext(AuthContext);
  return role;
};

export default function ProtectedRoutes() {
  const isAuthorized = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorized !== "admin") {
      navigate("/");
    } else {
      navigate("/backoffice");
    }
  }, [isAuthorized, navigate]);

  return isAuthorized === "admin" ? <Outlet /> : <Home />;
}
