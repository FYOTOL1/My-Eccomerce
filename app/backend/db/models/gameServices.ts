import { Schema, model, models } from "mongoose";

const gameServices = new Schema({
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

export default models.gameServices || model("gameServices", gameServices);
