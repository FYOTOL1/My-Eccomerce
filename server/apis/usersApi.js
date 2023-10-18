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

usersApi.post("/users/data/update", async (req, res) => {
  try {
    await connectDb();
    const { username, email, password, phone_number, _id, role } =
      await req.body;
    const UpdateData = {
      ...(username && { username: username }),
      ...(email && { email: email }),
      ...(password && { password: password }),
      ...(phone_number && { phone_number: phone_number }),
      ...(role && { role: role }),
    };

    const UpdateUser = await user.updateOne({ _id }, UpdateData, {
      new: true,
    });
    return res.status(200).json(UpdateUser);
  } catch (error) {
    return res.status(400).json(error);
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

usersApi.delete("/users/data/delete/:_id", async (req, res) => {
  try {
    await connectDb();
    const { _id } = await req.params;
    const DeleteUser = await user.deleteOne({ _id: _id });
    return res.status(200).json(DeleteUser);
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

module.exports = usersApi;
