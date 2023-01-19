import React, { useState } from "react";
import college1 from "../src/nudes/College1.jpg";
import college2 from "../src/nudes/College2.jpg";
import college3 from "../src/nudes/College3.jpg";

function StartBody() {
  const [college, setCollege] = useState("");

  const handleSearchChange = (event) => {
    let p = document.getElementById("uTextbox");
    let text = event.target.value;
    setCollege(event.target.value);
    p.textContent = text;
    console.log(text);
    if (text.length < 1) {
      p.textContent = "Search Colleges Here...";
    }
  };

  return (
    <div id="StartBody-Container">
      <img id="StartB-1" src={college1}></img>
      <div id="StartB-Search">
        <div id="searchBox" value="hello">
          <p id="uTextbox">Search Colleges Here...</p>
          <input
            type={"text"}
            name={"username"}
            value={college}
            onChange={(event) => handleSearchChange(event)}
            required
            placeholder="Search Colleges Here..."
            className="CollegeSearch"
            maxLength={50}
          ></input>
        </div>
      </div>
      <img id="StartB-2" src={college2}></img>
      <img id="StartB-3" src={college3}></img>
    </div>
  );
}

export default StartBody;
