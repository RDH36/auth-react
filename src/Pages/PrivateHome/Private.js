import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

export default function Private() {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
