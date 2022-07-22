import { Route, Routes } from "react-router-dom";
import SigInModal from "./Components/AuthForm/SigInModal";
import SignUpModal from "./Components/AuthForm/SignUpModal";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Pages/Home/Home";
import Private from "./Pages/PrivateHome/Private";
import PrivateHome from "./Pages/PrivateHome/PrivateHome";

function App() {
  return (
    <>
      <SignUpModal />
      <SigInModal />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
