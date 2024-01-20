const express = require("express");
const userController = require("../controllers/userController");
const userRoutes = express.Router();
const authController = require("../controllers/authController");

userRoutes
  .route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);
userRoutes
  .route("/:id")
  .delete(userController.deleteOne)
  .patch(userController.updateOne);
userRoutes.route("/signup").post(authController.signup);
userRoutes.route("/login").post(authController.login);
userRoutes.route("/me").get(authController.protect);

module.exports = userRoutes;
