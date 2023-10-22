const mongoose = require("mongoose");

const user = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username Required"],
  },
  email: {
    type: String,
    required: [true, "email Required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "password Required"],
  },
  passwordChangedAt: {
    type: Date,
    default: Date.now(),
  },
  phone_number: {
    type: Number,
    required: [true, "phone_number Required"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createdDate: {
    type: String,
    default: (e) => new Date().toLocaleDateString(),
  },
});

module.exports = mongoose.models.users || mongoose.model("users", user);
