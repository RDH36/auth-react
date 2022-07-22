import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ModalContextProvider from "./context/ModalContext";
import AuthContextProvider from "./context/AuthContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </AuthContextProvider>
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById("root")
);
