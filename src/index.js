const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

// Config static file
app.use(express.static(path.join(__dirname, "public")));

// Apply middleware
app.use(express.urlencoded());
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(".hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log("🚀req.body---->", req.body);
  res.send("");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
