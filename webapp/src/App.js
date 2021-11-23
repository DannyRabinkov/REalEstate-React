import "./App.css";
import FooterComp from "./components/footerComp/FooterComp";
import NavBarComp from "./components/navBarComp/NavBarComp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <NavBarComp />
      <ToastContainer autoClose={2000} />
      <FooterComp />
    </div>
  );
}

export default App;
