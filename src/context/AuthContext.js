import { createContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ signUp, currentUser, signIn }}>
      {!loadingData && props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
