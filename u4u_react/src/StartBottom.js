import React from "react";
import AOS from "aos";

function StartBottom() {
  AOS.init();

  return (
    <div id="S-BottomContainer">
      <div className="S-Bottom-Section1">
        {" "}
        <p data-aos="fade-up" className="S-bottom-text">
          <i class="fa-regular fa-user bottom-icon"></i>
          <br></br>
          Holistic Approach to the College Search
        </p>
      </div>
      <div className="S-Bottom-Section2">
        {" "}
        <p data-aos="fade-up" className="S-bottom-text">
          <i class="fa-regular fa-address-card bottom-icon"></i>
          <br></br>
          In Depth College profiles
        </p>{" "}
      </div>
      <div className="S-Bottom-Section3">
        {" "}
        <p data-aos="fade-up" className="S-bottom-text">
          <i class="fa-solid fa-magnifying-glass bottom-icon"></i>
          <br></br>
          Quick and Easy Navigation
        </p>{" "}
      </div>
      <div className="S-Bottom-Section4">
        {" "}
        <p data-aos="fade-up" className="S-bottom-text">
          <i class="fa-solid fa-list-ol bottom-icon"></i>
          <br></br>
          Personalized College Tier lists
        </p>{" "}
      </div>
    </div>
  );
}

export default StartBottom;
