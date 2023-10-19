const express = require("express");
const connectDb = require("../db/connectDb");
const product = require("../db/models/product");
const productApi = express.Router();

productApi.post("/products", async (req, res) => {
  try {
    await connectDb();
    const { img, title, info, price, rate, type } = await req.body;
    const CreateProduct = await product.create({
      img,
      title,
      type,
      info,
      price,
      rate,
    });
    return res.status(201).json(CreateProduct);
  } catch (error) {
    return res.status(400).json({ msg: error.message || "Field Request" });
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
    const { img, title, info, price, rate, type } = await req.body;
    const update = {
      ...(img && { img: img }),
      ...(title && { title: title }),
      ...(info && { info: info }),
      ...(price && { price: price }),
      ...(rate && { rate: rate }),
      ...(type && { type: type }),
    };
    const GetProduct = await product.updateOne({ _id: id }, update, {
      new: true,
    });
    return res.status(200).json(GetProduct);
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
