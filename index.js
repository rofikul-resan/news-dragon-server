const express = require("express");
const category = require("./data/categories.json");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("server start successful");
});

app.get("/category", (req, res) => {
  res.send(category);
});

app.listen(port, () => {
  console.log("hay buddy");
});
