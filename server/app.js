const express = require("express");
const featuredApi = require("./apis/featuredApi");
const popularApi = require("./apis/popularApi");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "https://3ayez.vercel.app/*",
  })
);

app.use(featuredApi);
app.use(popularApi);

app.listen(3002, () => {
  console.log("Connected Successfully");
});
