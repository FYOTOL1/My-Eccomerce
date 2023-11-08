const express = require("express");
const connectDb = require("../db/connectDb");
const user = require("../db/models/auth/user");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "ahmedahmedahmed1231231234asdasdasd";
const JWT_EXPIRE_TIME = "265000d";
const loginApi = express.Router();

loginApi.post("/auth/login", async (req, res) => {
  try {
    await connectDb();
    const { email, password } = await req.body;
    const FindUser = await user.findOne({ email: email, password: password });
    if (FindUser) {
      const access_token = jwt.sign(
        { userId: FindUser._id, role: FindUser.role },
        JWT_SECRET_KEY,
        {
          expiresIn: JWT_EXPIRE_TIME,
        }
      );
      return res.status(200).json({ FindUser, token: access_token });
    } else {
      return res.status(401).json({ msg: "Incorrect Email OR Password" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

module.exports = loginApi;
