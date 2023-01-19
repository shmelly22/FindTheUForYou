import React from "react";
import logo from "../src/nudes/logo.jpeg";

function StartHeader() {
  return (
    <div className="StartHeaderContainer">
      <div className="H-Section1">
        <label className="hover-underline-animation StartLabels">
          <a href="http://localhost:3000/home"> Home </a>
        </label>{" "}
        <label className="StartLabels"> | </label>{" "}
        <label className="hover-underline-animation StartLabels">
          <a href="http://localhost:3000/aboutus"> About Us</a>
        </label>
      </div>
      <div className="H-Section2">
        <img id="StartH-logo" src={logo}></img>
      </div>
      <div className="H-Section3">
        {" "}
        <label className="hover-underline-animation StartLabels">
          <a href="http://localhost:3000/login"> Login</a>
        </label>{" "}
        <label className="StartLabels"> | </label>{" "}
        <label className="hover-underline-animation StartLabels">
          <a href="http://localhost:3000/createaccount"> Create Account</a>
        </label>{" "}
      </div>
    </div>
  );
}

export default StartHeader;
