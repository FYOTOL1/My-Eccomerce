const express = require("express");
const connectDb = require("../db/connectDb");
const product = require("../db/models/product");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "ahmedahmedahmed1231231234asdasdasd";
const productApi = express.Router();

productApi.post("/products/create", async (req, res) => {
  try {
    await connectDb();
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return res
        .status(401)
        .json({ msg: "Please Login For Get Access This Router" });
    }
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    if (decoded) {
      return res.status(200).json(decoded);
    } else {
      return res.status(401).json({ msg: "Invalid Token" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error.message || "Field Request" });
  }
});

module.exports = productApi;
