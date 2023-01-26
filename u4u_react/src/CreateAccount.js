
import "./CreateAccount.css";
import React, { useState } from "react";
import StartHeader from "./StartHeader";
import "./Startpage.css";


function CreateAccount() {
  var allUsernames = [];
  var allPasswords = [];
  var allEmails = [];

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
          allUsernames.push(data.usernames[index]);
          allPasswords.push(data.password[index]);
          allEmails.push(data.email[index]);
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
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    if (username.length < 1 || password.length < 1) {
      alert("Please enter a Username and Password");
    } else {
      if (allEmails.indexOf(email) === -1) {
        if (allUsernames.indexOf(username) === -1) {
          alert(
            "Username doesn't exist. Account created: " +
              username +
              "," +
              " " +
              password +
              "," +
              " " +
              email
          );
          window.location.href = "http://localhost:3000/login";
          fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, email }),
          });
        } else {
          console.log("Username taken");
        }
      } else {
        alert("Email is taken");
      }
    }
    event.preventDefault();
  };

  return (
    <div id="cc-container">
      <StartHeader />
      <link
        href="https://fonts.googleapis.com/css?family=Yellowtail:400"
        rel="stylesheet"
        type="text/css"
      ></link>
      <h1 className="header">Create Account</h1>
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
              className="loginInputs"
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
              className="loginInputs"
              maxLength={12}
            ></input>
            <div id="emailBox" value="hello">
              <input
                type={"email"}
                name={"email"}
                value={email}
                onChange={(event) => handleEmailChange(event)}
                required
                placeholder="Email"
                className="loginInputs"
                maxLength={25}
              ></input>
            </div>
          </div>

          <div id="submitButton">
            <p className="submitLabel">Create Account</p>
            <button
              type="submit"
              className="loginSubmit"
              onClick={(event) => handleSubmit(event)}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
