import React, { useState } from "react";
import "./Login.css";
import StartHeader from "./StartHeader";
import "./Startpage.css";

function Login() {
  var allUsernames = [];
  var allPasswords = [];
  var allEmails = [];
  var allUserID = [];

  fetch("http://localhost:5000/login", {
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
      console.log(data);
      for (let index = 0; index < data.usernames.length; index++) {
        if (allUsernames.indexOf(data.usernames[index]) === -1) {
          allUsernames.push(data.usernames[index].toUpperCase());
          allPasswords.push(data.password[index].toUpperCase());
          allEmails.push(data.email[index].toUpperCase());
          allUserID.push(data.user_id[index]);
        }
      }
    });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePassowrdChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    let usernameInput = username.toUpperCase();
    let passwordInput = password.toUpperCase();
    if (usernameInput.length < 1 || passwordInput.length < 1) {
      alert("Please enter a Username and Password");
    } else {
      if (allUsernames.indexOf(usernameInput) === -1) {
        alert("Username not found, please try again");
      } else {
        let usernameIndex = allUsernames.indexOf(usernameInput);
        if (allPasswords.indexOf(passwordInput) === usernameIndex) {
          alert("Username and password match welcome in" + " " + username);
          window.location.href = "http://localhost:3000/";
          sessionStorage.setItem("User", username);
          sessionStorage.setItem("UserID", allUserID[usernameIndex]);
        } else {
          alert("Username is correct, however the password is incorrect");
        }
      }
    }
    event.preventDefault();
  };

  return (
    <div className="cc-container">
      <StartHeader />
      <link
        href="https://fonts.googleapis.com/css?family=Yellowtail:400"
        rel="stylesheet"
        type="text/css"
      ></link>
      <section class="vh-100 gradient-custom">
        <div className="Background">
          <div className="rectangleL"></div>
          <h1 className="Header">Login</h1>
          <div className="Header2">
            Please enter your username and password!
          </div>
          <div id="createAccountContainer">
            <div id="createAccountBox">
              <div id="usernameBox" value="hello">
                <input
                  type={"text"}
                  name={"username"}
                  value={username}
                  onChange={(event) => handleUsernameChange(event)}
                  required
                  placeholder="Username"
                  className="loginInputU"
                  maxLength={18}
                ></input>
              </div>
              <div id="passwordBox">
                <input
                  type={"text"}
                  name={"password"}
                  value={password}
                  onChange={(event) => handlePassowrdChange(event)}
                  required
                  placeholder="Password"
                  className="loginInputP"
                  maxLength={12}
                ></input>
              </div>
              <div id="submitButton">
                <button
                  type="submit"
                  className="LoginSubmit"
                  onClick={(event) => handleSubmit(event)}
                >
                  Login
                </button>
              </div>
              <div className="Footer">
                Dont have an account? {""}
                <a
                  href="http://localhost:3000/CreateAccount/"
                  className="linkL"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
