//Run the production built version
import path from "path";

import open from "open";
import express from "express";
import compression from "compression";


/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const app = express();
const port = 3000;

app.use(compression());
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

//Mock an api call
app.get("/users", (req, res, next) => {
  res.json([
    { "id": 1, "firstName": "Ty", "lastName": "haro", "email": "ty@ty100.com" },
    { "id": 2, "firstName": "Taibu", "lastName": "haroub", "email": "taibu@ty100.com" },
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
