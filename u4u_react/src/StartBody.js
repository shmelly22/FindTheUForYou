import React, { useState, useEffect } from "react";
import college1 from "../src/nudes/College1.jpg";
import college2 from "../src/nudes/College2.jpg";
import college3 from "../src/nudes/College3.jpg";
import collegenames from "./us_institutions.json";

function StartBody() {
  const collegedata = collegenames;

  const [college, setCollege] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  function handleSearchButtonClicked() {
    window.location.href = "http://localhost:3000/collegeReport";
    sessionStorage.setItem("collegeSearched", college);
  }

  const handleSearchChange = (event) => {
    setCollege(event.target.value);
    setFilteredArray(
      collegedata.filter((college) =>
        college.institution
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );

    if (event.target.value == "") {
      setFilteredArray([]);
    }
  };

  const handleAClicked = (event) => {
    console.log(event.target.textContent);
    sessionStorage.setItem("collegeSearched", event.target.textContent);
  };

  return (
    <div id="StartBody-Container">
      <img id="StartB-1" src={college1}></img>
      <div id="StartB-Search">
        <div id="searchBox">
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
          <i
            className="fa-regular fa-circle-right"
            onClick={handleSearchButtonClicked}
          ></i>
        </div>
        <div id="college-autofill">
          {" "}
          <ul id="college-autofill-list">
            {filteredArray.slice(0, 10).map((college) => (
              <li key={college.institution}>
                <a
                  className="college-autofill-values hover-underline-animation"
                  href="http://localhost:3000/collegeReport"
                  onClick={(event) => handleAClicked(event)}
                >
                  {college.institution}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img id="StartB-2" src={college2}></img>
      <img id="StartB-3" src={college3}></img>
    </div>
  );
}

export default StartBody;
