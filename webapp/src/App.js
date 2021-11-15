import "./App.css";
import FooterComp from "./components/footerComp/FooterComp";
import NavBarComp from "./components/navBarComp/NavBarComp";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { getMeData } from "../src/helpers/javascriptHelpers";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("token") != null)
      getMeData(localStorage.getItem("token"), (data) => {
        setUser(data);
        /* setUser(data); */
      });
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
