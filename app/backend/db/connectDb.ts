const mongoose = require("mongoose");

export default async function connectDb() {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://fyotol:FYOTOL2008@cluster0.2ybaklw.mongodb.net/My-Ecommerce?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    return connect;
  } catch (error) {
    console.log("Field Connect");
    return;
  }
}
