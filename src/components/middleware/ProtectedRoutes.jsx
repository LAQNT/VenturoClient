import React, { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Home from "../../pages/Home";

const ProtectedRoutes = ({ children }) => {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "admin") {
      navigate("/");
    }
  }, [role, navigate]);

  return role === "admin" ? <Outlet /> : <Home />;
};

export default ProtectedRoutes;
