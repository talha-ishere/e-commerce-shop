const util = require("util");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const AppError = require("../utils/AppError");

////////////////// JWt token Assign Function
const signtoken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

/////////////////// Send JWT and Responce
const createSendToken = (user, statusCode, req, res) => {
  const token = signtoken(user);
  /// Send token as Cookies
  res.cookie("jwt", token, {
    // For mili Seconds
    // expiresIn: Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,

    // For Seconds
    // new Date will convert mili seconds into exact Date and Time Format
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60
    ),
    secure: true,
    httpOnly: true,
  });

  /// Remove password from responce
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  //signToken
  createSendToken(newUser, 201, req, res);
});
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //// 1)Check If email and password not exist
  if (!email || !password) {
    return next(new AppError("Please Enter Email and Password", 400));
  }

  //// 2)Check for user in DataBase and select its Passowrd
  const user = await User.findOne({ email }).select("password");
  if (!user) {
    return next(new AppError("No User Find with this Email or Password", 401));
  }

  //// 3) Now compare user enterd Password and DataBase Save Passowrd
  const correct = await user.correctPassword(password, user.password);

  if (!user || !correct) {
    return next(
      new AppError("No User Find email or password is incorrect", 404)
    );
  }
  //// 4) If every thing is OK Now send token to client
  console.log(user);
  createSendToken(user, 200, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  let decoded;
  //// 1) Getting token and Check if its there
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    // If the verification succeeds, you can use the decoded data here
    next();
  } catch (error) {
    // Handle the error (e.g., token is invalid or missing)
    console.error("JWT verification failed:", error.message);
  }
  console.log(decoded);
  //// 2) Check If User still exist
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    next(new AppError("This user is no longer exist in DataBase", 401));
  }
  //// 3) Check if user change Password after token issued
  const passwordChangeStatus = currentUser.passwordChangedAfter(decoded.iat);
  if (passwordChangeStatus) {
    return next(
      new AppError("This token is not valid user change password recently", 401)
    );
  } else {
    next();
  }
  ////
});
