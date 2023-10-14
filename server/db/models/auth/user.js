const mongoose = require("mongoose");

const user = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username Required"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "email Required"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password Required"],
      lowercase: true,
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.users || mongoose.model("users", user);
