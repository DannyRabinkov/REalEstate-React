import "./App.css";
import FooterComp from "./components/footerComp/FooterComp";
import NavBarComp from "./components/navBarComp/NavBarComp";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("token") != null)
      setUser(localStorage.getItem("token"));
  });

  return (
    <div className="App">
      <NavBarComp setUserCallback={setUser} user={user} />
      <ToastContainer />
      <FooterComp />
    </div>
  );
}

export default App;
