import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { AuthContext } from "../../context/AuthContext";

export default function NavBar() {
  const { toggleButton } = useContext(ModalContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert("Check your connection and retry");
    }
  };
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        AuthJS
      </Link>

      <div className="d-flex flex-row">
        {!currentUser ? (
          <div className="mx-2">
            <button
              className="btn btn-primary mx-2"
              onClick={() => toggleButton("signUp")}
            >
              Sign Up
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => toggleButton("signIn")}
            >
              Sign In
            </button>
          </div>
        ) : (
          <div className="mx-2">
            <button className="btn btn-danger" onClick={logOut}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
