import React from "react";
import "./Startpage.css";
import StartBody from "./StartBody";
import StartBottom from "./StartBottom";
import StartHeader from "./StartHeader";

function Startpage(props) {
  return (
    <div className="StartpageContainer">
      <div className="StartHeader">
        <StartHeader />{" "}
      </div>
      <div className="StartBody">
        <StartBody />{" "}
      </div>
      <div className="StartBottom">
        <StartBottom />{" "}
      </div>
    </div>
  );
}

export default Startpage;
