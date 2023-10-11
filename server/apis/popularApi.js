const express = require("express");
const connectDb = require("../db/connectDb");
const popular = require("../db/models/home/services/popular");
const popularApi = express.Router();

popularApi.get("/services/popular", async (req, res) => {
  try {
    await connectDb();
    const GetPopularServices = await popular.find();
    return res.status(200).json(GetPopularServices);
  } catch (error) {
    return res.status(300).json({ msg: error });
  }
});

module.exports = popularApi;
