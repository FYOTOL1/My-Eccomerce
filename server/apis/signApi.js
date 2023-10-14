const express = require("express");
const connectDb = require("../db/connectDb");
const user = require("../db/models/auth/user");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "ahmedahmedahmed1231231234asdasdasd";
const JWT_EXPIRE_TIME = "90d";
const signupApi = express.Router();

signupApi.post("/auth/signup", async (req, res) => {
  try {
    await connectDb();
    const { username, email, phone_number, password } = await req.body;
    const checkUser = await user.find({ email: email });
    if (!checkUser.length) {
      const CreateUser = await user.create({
        username,
        email,
        phone_number,
        password,
      });
      const token = jwt.sign({ userId: CreateUser._id }, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRE_TIME,
      });
      return res.status(201).json({ CreateUser, token: token });
    } else {
      return res.status(400).json({ msg: "User Already Exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error.message || "Field Request" });
  }
});

module.exports = signupApi;
