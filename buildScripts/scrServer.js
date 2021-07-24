const path = require("path");
const open = require("open");

const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
