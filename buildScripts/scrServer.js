import path from "path";

import open from "open";
import express from "express";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const app = express();
const port = 3000;
const compiler = webpack(config);

//will tell express to use webpack dev middleware
app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
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
