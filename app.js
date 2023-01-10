const express = require("express");
const app = express();

var router = require("./routes/index");
app.set("view engine", "ejs");

app.use("/", router);
app.get("/", (req, res) => {
  res.render("router");
});
app.listen(3500);