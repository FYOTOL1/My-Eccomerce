const mongoose = require("mongoose");
const featuredServices = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
});

module.exports =
  mongoose.models.featuredServices ||
  mongoose.model("featuredServices", featuredServices);
