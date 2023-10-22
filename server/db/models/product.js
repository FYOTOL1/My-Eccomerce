const mongoose = require("mongoose");

const product = mongoose.Schema(
  {
    img: {
      type: String,
      required: [true, "Image Required"],
    },
    category: {
      type: String,
      required: [true, "Type Required"],
    },
    title: {
      type: String,
      required: [true, "Title Required"],
    },
    quantity: {
      type: Number,
      required: [true, "quantity"],
      default: 1,
    },
    info: {
      type: String,
      required: [true, "Info Required"],
    },
    price: {
      type: Number,
      required: [true, " Price Required"],
    },
    status: {
      type: Boolean,
      default: true,
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
