const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
const fs = require("fs");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const db = require("knex")({
  client: "pg",
  connection: {
    host: "arjuna.db.elephantsql.com",
    user: "kzodqrwg",
    password: "IgOQdNWzL8yx5z8IAkuJQ5flxz6ZPyW-",
    database: "kzodqrwg",
    port: 5432,
  },
});
app.set("db", db);

app.get("/", (req, res) => {
  res.json("January");
});

var allUsernames = [];
var allPasswords = [];
var allEmails = [];

app.get("/login", (req, res) => {
  db.select("username", "password", "email")
    .from("accounts")
    .then((rows) => {
      // console.log(rows);
      for (let index = 0; index < rows.length; index++) {
        if (allUsernames.indexOf(rows[index].username) === -1) {
          allUsernames.push(rows[index].username);
          allPasswords.push(rows[index].password);
          allEmails.push(rows[index].email);
        }

        console.log(allUsernames);
        console.log(allPasswords);
        console.log(allEmails);
      }
    });
  var allLoginInfo = {
    usernames: allUsernames,
    password: allPasswords,
    email: allEmails,
  };

  res.json(allLoginInfo);
});

app.post("/login", (req, res) => {
  let userCreated = req.body.username;
  let passCreated = req.body.password;
  let userEmail = req.body.email;
  db("accounts")
    .insert(
      {
        username: userCreated,
        password: passCreated,
        email: userEmail,
      },
      ["username", "password", "email"]
    )
    .then((accounts) => console.log("Username Added to DB"));
});

app.get("/college", (req, res) => {
  fs.readFile("./us_institutions.json", (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.post("/college", (req, res) => {
  console.log("I am posting in the colleges page");
  let userLogged = req.body.user;
  let collegeSearched = req.body.collegeSearched;

  db("collegelist")
    .insert(
      {
        user: userLogged,
        college: collegeSearched,
      },
      ["user", "college"]
    )
    .then((accounts) => console.log("user and college added to db"));
});

app.listen(5000, () => {
  console.log("listening on 5000");
});
