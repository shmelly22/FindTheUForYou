const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
const fs = require("fs");
import path from "path";

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "./u4u_react/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./u4u_react/build", "index.html"));
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const db = require("knex")({
  client: "pg",
  connection: {
    host: "arjuna.db.elephantsql.com",
    user: "kzodqrwg",
    password: "3Bf_uXiElb-1WLJoraC2YZTP0B-8Imjz",
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
var allUsers = [];
var allUsersCollege = [];
var allCollegeFav = [];
var collegeCounter = 0;

app.get("/login", (req, res) => {
  db.select("username", "password", "email", "user_id")
    .from("accounts")
    .then((rows) => {
      // console.log(rows);
      for (let index = 0; index < rows.length; index++) {
        if (allUsernames.indexOf(rows[index].username) === -1) {
          allUsernames.push(rows[index].username);
          allPasswords.push(rows[index].password);
          allEmails.push(rows[index].email);
          allUsers.push(rows[index].user_id);
        }

        console.log(allUsernames);
        console.log(allPasswords);
        console.log(allEmails);
        console.log(allUsers);
      }
    });

  var allLoginInfo = {
    usernames: allUsernames,
    password: allPasswords,
    email: allEmails,
    users: allUsers,
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
  db.select("user", "college")
    .from("collegelist")
    .then((rows) => {
      // console.log(rows);

      for (let index = 0; index < rows.length; index++) {
        allUsersCollege.push(rows[index].user);
        allCollegeFav.push(rows[index].college);

        console.log(allUsersCollege);
        console.log(allCollegeFav);
      }
    })
    .then(() => {
      var allCollegeListDetails = {
        users: allUsersCollege,
        collegesFavorited: allCollegeFav,
      };

      res.json(allCollegeListDetails);
    })
    .then(() => {
      allUsersCollege = [];
      allCollegeFav = [];
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

app.post("/collegeRemove", (req, res) => {
  let userLogged = req.body.user;
  let collegeSearched = req.body.collegeSearched;
  console.log(
    "I am deleting" + " " + { collegeSearched } + " " + "from the favorites"
  );

  db("collegelist")
    .where({
      user: userLogged,
      college: collegeSearched,
    })
    .del()
    .then(() => {
      console.log("Deleted rows");
    });
});
