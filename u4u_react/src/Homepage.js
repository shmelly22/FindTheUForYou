import React from "react";
import Tierlist from "./Tierlist";

import "./Homepage.css";

function Homepage() {
  return (
    <div className="Tierlist">
      <Tierlist />{" "}
      <img
        src="https://i.ytimg.com/vi/zcTMmfxXEkg/maxresdefault.jpg"
        className="hikaru"
        draggable="true"
      ></img>
    </div>
  );
}

export default Homepage;
