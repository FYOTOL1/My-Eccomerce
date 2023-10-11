const express = require("express");
const featuredApi = require("./apis/featuredApi");
const popularApi = require("./apis/popularApi");
const app = express();

app.use(express.json());

app.use(featuredApi);
app.use(popularApi);

app.listen(3002, () => {
  console.log("Connected Successfully");
});
