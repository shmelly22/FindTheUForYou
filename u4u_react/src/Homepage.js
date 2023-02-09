import React from "react";
import Tierlist from "./Tierlist";
import StartHeader from "./StartHeader";

import "./Homepage.css";

function Homepage() {
  return (
    <div className="Tierlist">
      <StartHeader></StartHeader>
      <div style={{ padding: "10px" }}></div>
      <Tierlist />{" "}
    </div>
  );
}

export default Homepage;
