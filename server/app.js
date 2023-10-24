const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// apis
const featuredApi = require("./apis/featuredApi");
const popularApi = require("./apis/popularApi");
const usersApi = require("./apis/usersApi");
const loginApi = require("./apis/loginApi");
const signupApi = require("./apis/signApi");
const productApi = require("./apis/productApi");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(cookieParser());

// apis
app.use(signupApi);
app.use(featuredApi);
app.use(popularApi);
app.use(usersApi);
app.use(loginApi);
app.use(productApi);
// apis.

app.listen(3002, () => {
});
