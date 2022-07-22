import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [closeOpen, setCloseOpen] = useState({
    signUp: false,
    signIn: false,
  });

  const toggleButton = (modal) => {
    if (modal === "signUp") {
      setCloseOpen({
        signUp: true,
        signIn: false,
      });
    }
    if (modal === "signIn") {
      setCloseOpen({
        signUp: false,
        signIn: true,
      });
    }
    if (modal === "close") {
      setCloseOpen({
        signUp: false,
        signIn: false,
      });
    }
  };
  return (
    <ModalContext.Provider value={{ closeOpen, toggleButton }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
