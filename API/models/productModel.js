const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageSrc: String,
  brand: String,
  category: String,
  rating: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
