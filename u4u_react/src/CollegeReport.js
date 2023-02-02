import React from "react";
import StartHeader from "./StartHeader";
import "./CR.css";

function CollegeReport() {
  var collegeSearched = sessionStorage.getItem("collegeSearched");
  var user = sessionStorage.getItem("User");

  const favoriteCollege = () => {
    if (user == null) {
      alert("You must be logged in to favorite a college");
    } else {
      fetch("http://localhost:5000/college", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, collegeSearched }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div id="CollegeReportContainer">
      <StartHeader />
      <div className="CR-body-container">
        <div className="CR-body-top">
          <h1>{collegeSearched}</h1> <h3>Location Here</h3>
          <i
            id="CR-heart"
            className="fa-regular fa-heart"
            onClick={favoriteCollege}
          ></i>
        </div>
        <div className="CR-body-main"> </div>
      </div>
    </div>
  );
}

export default CollegeReport;
