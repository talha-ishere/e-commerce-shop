const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");

productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);
productRouter
  .route("/:id")
  .get(productController.getOneProduct)
  .delete(productController.deleteOneProduct);
module.exports = productRouter;
