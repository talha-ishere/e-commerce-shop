const Factory = require("./handlerFactory");
const Product = require("../models/productModel");

exports.getAllProducts = Factory.getAll(Product);
exports.getOneProduct = Factory.getOne(Product);
exports.createProduct = Factory.createOne(Product);
exports.deleteOneProduct = Factory.deleteOne(Product);
