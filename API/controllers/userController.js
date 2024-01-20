// const catchAsync = require("../utils/catchAsync");
const Factory = require("./handlerFactory");
const User = require("../models/userModel");

exports.getAllUser = Factory.getAll(User);
exports.createUser = Factory.createOne(User);
exports.deleteOne = Factory.deleteOne(User);
exports.updateOne = Factory.updateOne(User);
