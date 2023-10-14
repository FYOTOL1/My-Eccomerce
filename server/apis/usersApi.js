const express = require("express");
const connectDb = require("../db/connectDb");
const user = require("../db/models/auth/user");
const usersApi = express.Router();

usersApi.get("/users/data", async (req, res) => {
  try {
    await connectDb();
    const GetUsers = await user.find();
    return res.status(200).json(GetUsers);
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

usersApi.delete("/users/data/delete/all", async (req, res) => {
  try {
    await connectDb();
    const DeleteAll = await user.deleteMany();
    return res.status(200).json(DeleteAll);
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

usersApi.delete("/users/data/delete/:id", async (req, res) => {
  try {
    await connectDb();
    const _id = req.params.id;
    const DeleteAll = await user.deleteOne({ _id: _id });
    return res.status(200).json(DeleteAll);
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

module.exports = usersApi;
