import "./App.css";
import Startpage from "./Startpage";
import Homepage from "./Homepage";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import AboutUs from "./AboutUs";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
