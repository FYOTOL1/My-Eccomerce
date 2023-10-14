const mongoose = require("mongoose");

const product = mongoose.Schema(
  {
    img: {
      type: String,
      required: [true, "Image Required"],
    },
    type: {
      type: String,
      required: [true, "Type Required"],
    },
    title: {
      type: String,
      required: [true, "Title Required"],
    },
    info: {
      type: String,
      required: [true, "Info Required"],
    },
    price: {
      type: Number,
      required: [true, " Price Required"],
    },
    rate: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.products || mongoose.model("products", product);
