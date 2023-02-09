import React, { useState } from "react";

import logo from "../src/nudes/logo.png";
import "./Startpage.css";

function StartHeader() {
  const [location, setLocation] = useState({
    location: "",
    name: "",
  });

  const [userLL, setUserLL] = useState({
    href: "",
    name: "",
  });

  const [userLCC, setUserLCC] = useState({
    href: "",
    name: "",
  });

  //CHECKS THE WINDOW LOCATION ON LOAD, IF IT IS THE HOME ROUTE THEN THE HOME TAB SWITCHES TO THE MY LISTS TAB
  //IF IT IS ON ANY OTHER PAGE BESIDES THE HOME THE MY LIST TURNS TO THE HOME BUTTON AND THE ABOUT
  //ALSO CHECKS ON WINDOW LOAD IF THE USER IS SIGNED IN, IF YES THEN THE LOGIN BUTTON BECOMES THE MY LIST, AND THE CA BECOMES THE USERNAME
  var onLL = {
    location: "",
    user: sessionStorage.getItem("User"),
    userID: sessionStorage.getItem("UserID"),
  };
  function firstFunction() {
    onLL.location = window.location.href;
    console.log(
      "start opf first func" + " " + "the location is " + " " + onLL.location
    );
    console.log(onLL);
  }

  const secondFunction = async () => {
    const result = await firstFunction();
    console.log(
      "start opf second func" + " " + "the location is " + " " + onLL.location
    );

    //IF THE USER IS NOT LOGGED IN THE LOGIN IS SET TO THE LEFT AND CREATE ACCOUNT TO THE RIGHT,
    //IF THE USER IS LOGGED IN THE MY LIST PAGE IS MOVED TO WHERE LOGIN WAS, AND THE NAME TAKES OVER THE CREATE ACCOUNT
    if (onLL.user === null) {
      setUserLL({
        href: "http://localhost:3000/login",
        name: "Login",
      });
      setUserLCC({
        href: "http://localhost:3000/createaccount",
        name: "Create Account",
      });

      //IF USER IS NOT LOGGED IN THE LEFT SIDE OF NAV BAR IS THE NORMAL AND LOGIC DECIDES IF IT IS THE HOMEPAGE OR NOT
      if (onLL.location === "http://localhost:3000/") {
        setLocation({
          location: "http://localhost:3000/homepage",
          name: "My List",
        });
        console.log("Set location to my list");
      } else {
        setLocation({
          location: "http://localhost:3000/",
          name: "Home",
        });
        console.log("Set location to Home");
      }
    } else {
      //IF USER IS LOGGED IN THEN THE LEFT SIDE OF THE NAVBAR BECOMES JUST HOME AND ABOUT US REGARDLESS
      setLocation({
        location: "http://localhost:3000/",
        name: "Home",
      });
      setUserLL({
        href: "http://localhost:3000/homepage",
        name: "My list",
      });
      setUserLCC({
        href: "http://localhost:3000/",
        name: onLL.user,
      });
    }
  };

  window.onload = secondFunction;

  const listCheck = () => {
    console.log("This has been activiated");
    if (location.location == "http://localhost:3000/homepage") {
      console.log("this confirms that the name is set to my list");
      if (onLL.user === null) {
        alert("You must log in to see your list first");
        setLocation({
          location: "http://localhost:3000/login",
          name: "My list",
        });
      }
    }
  };

  return (
    <div className="StartHeaderContainer">
      <div className="H-Section1">
        <label className="hover-underline-animation StartLabels">
          <a href={location.location} onClick={listCheck}>
            {location.name}{" "}
          </a>
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
          <a href={userLL.href}> {userLL.name}</a>
        </label>{" "}
        <label className="StartLabels"> | </label>{" "}
        <label className="hover-underline-animation StartLabels">
          <a href={userLCC.href}> {userLCC.name} </a>
        </label>{" "}
      </div>
    </div>
  );
}

export default StartHeader;
