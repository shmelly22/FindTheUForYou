import React, { useState, useEffect } from "react";
import college1 from "../src/nudes/College1.jpg";
import college2 from "../src/nudes/College2.jpg";
import college3 from "../src/nudes/College3.jpg";

function StartBody() {
  const [college, setCollege] = useState("");

  const handleSearchChange = (event) => {
    setCollege(event.target.value);
    const filteredColleges = collegeListArr.filter(
      (collegeName) => collegeName == college
    );
    console.log(filteredColleges);
  };

  function handleSearchButtonClicked() {
    window.location.href = "http://localhost:3000/collegeReport";
    sessionStorage.setItem("collegeSearched", college);
  }
  var collegeListArr;

  const showList = () => {
    console.log(collegeListArr);
  };

  useEffect(() => {
    fetch("http://localhost:5000/college", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then((data) => {
        collegeListArr = data;
      })
      .then(() => {
        showList();
      });
  }, []);

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
      </div>
      <img id="StartB-2" src={college2}></img>
      <img id="StartB-3" src={college3}></img>
    </div>
  );
}

export default StartBody;
