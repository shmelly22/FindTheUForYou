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
    host: "localhost",
    user: "zachary",
    password: "2048",
    database: "postgres",
    port: 5432,
  },
});
app.set("db", db);

app.get("/", (req, res) => {
  res.json("January");
});

app.listen(5000, () => {
  console.log("listening on 5000");
});
