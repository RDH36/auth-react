import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">
        {currentUser ? "Welcome buddy" : "Hi, Sign Up or Sign IN"}
      </h1>
    </div>
  );
}
