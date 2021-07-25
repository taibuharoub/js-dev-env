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

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
