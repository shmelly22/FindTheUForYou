const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");

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
  (async () => {
    const response = await fetch(
      "https://parseapi.back4app.com/classes/University/state",
      {
        headers: {
          "X-Parse-Application-Id": "Ipq7xXxHYGxtAtrDgCvG0hrzriHKdOsnnapEgcbe", // This is the fake app's application id
          "X-Parse-Master-Key": "HNodr26mkits5ibQx2rIi0GR9pVCwOSEAkqJjgVp", // This is the fake app's readonly master key
        },
      }
    );
    const data = await response.json(); // Here you have the data that you need
    console.log(JSON.stringify(data, null, 2));
  })();
});

app.listen(5000, () => {
  console.log("listening on 5000");
});
