const express = require("express");
const connectDb = require("../db/connectDb");
const featured = require("../db/models/home/services/featured");
const featuredApi = express.Router();

featuredApi.get("/services/featured", async (req, res) => {
  try {
    await connectDb();
    const GetFeaturedServices = await featured.find();
    return res.status(200).json(GetFeaturedServices);
  } catch (error) {}
});

module.exports = featuredApi;
