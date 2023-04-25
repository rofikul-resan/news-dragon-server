const express = require("express");
const category = require("./data/categories.json");
const news = require("./data/news.json");
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

app.get("/news-category/:id", (req, res) => {
  const id = req.params.id;
  if (+id === 0) {
    res.send(news);
  } else {
    const reqNews = news.filter((n) => +n.category_id === +id);
    res.send(reqNews);
  }
});

app.get("/new/:id", (req, res) => {
  const id = req.params.id;
  const reqNew = news.find((n) => n._id === id);
  res.send(reqNew);
});
app.listen(port, () => {
  console.log("hay buddy");
});
