const path = require("path");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/views", "index.html"));
});

app.listen(port);
