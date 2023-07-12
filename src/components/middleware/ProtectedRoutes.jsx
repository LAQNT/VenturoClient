import React, { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import jwt_decode from "jwt-decode";
import Login from "../../pages/Login";

// const useAuth = () => {
//   const { user } = useContext(AuthContext);
//   return user;
// };

// const useSession = () => {
//   const user = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/", { replace: true });
//     } else if (user.role === "admin") {
//       navigate("/backoffice", { replace: true });
//     }
//   }, [navigate, user]);

//   return user;
// };

// export default function ProtectedRoutes() {
//   const isAuthorized = useAuth();
//   const session = useSession();
//   return isAuthorized ? <Outlet /> : <Login />;
// }
const useAuth = () => {
  const { user } = useContext(AuthContext);
  return user;
};

const useSession = () => {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    } else if (user.role === "admin") {
      navigate("/backoffice", { replace: true });
    }
  }, [navigate, user]);

  return user;
};

export default function ProtectedRoutes() {
  const isAuthorized = useAuth();
  const session = useSession();
  return isAuthorized ? <Outlet /> : <Login />;
}
