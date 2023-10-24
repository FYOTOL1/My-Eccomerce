const express = require("express");
const connectDb = require("../db/connectDb");
const product = require("../db/models/product");
const uploadImage = require("../utils/uploadImage");
const productApi = express.Router();

productApi.post("/products", async (req, res) => {
  try {
    await connectDb();
    const { img, title, info, price, category } = await req.body;
    const cloudinary_image_url = await uploadImage(img);
    const CreateProduct = await product.create({
      img: cloudinary_image_url,
      title,
      category,
      info,
      price,
    });
    return res.status(201).json(CreateProduct);
  } catch (error) {
    return res.status(400).json({ msg: error.message || error });
  }
});

productApi.get("/products", async (req, res) => {
  try {
    await connectDb();
    const GetProducts = await product.find();
    return res.status(200).json(GetProducts);
  } catch (error) {
    return res.status(400).json({ msg: error.message || "Field Request" });
  }
});

productApi.get("/products/:id", async (req, res) => {
  try {
    await connectDb();
    const { id } = await req.params;
    const GetProduct = await product.findOne({ _id: id });
    return res.status(200).json(GetProduct);
  } catch (error) {
    return res.status(400).json({ msg: error.message || "Field Request" });
  }
});

productApi.patch("/products/:id", async (req, res) => {
  try {
    await connectDb();
    const { id } = await req.params;
    const GetProduct = await product.findByIdAndUpdate(
      { _id: id },
      await req?.body,
      {
        new: true,
      }
    );
    return res.status(200).json(GetProduct);
  } catch (error) {
    return res.status(400).json({ msg: error.message || "Field Request" });
  }
});

productApi.delete("/products/all", async (req, res) => {
  try {
    await connectDb();
    const DeleteProducts = await product.deleteMany();
    return res.status(200).json(DeleteProducts);
  } catch (error) {
    return res.status(400).json({ msg: error.message || "Field Request" });
  }
});

productApi.delete("/products/:id", async (req, res) => {
  try {
    await connectDb();
    const { id } = await req.params;
    const DeleteProduct = await product.deleteOne({ _id: id });
    return res.status(200).json(DeleteProduct);
  } catch (error) {
    return res.status(400).json({ msg: error.message || "Field Request" });
  }
});

module.exports = productApi;
