const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please Enter Your Email"],
    validate: [validator.isEmail, "Please Enter a Valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter your Password"],
  },
  passwordChangedAt: Date,
});

userSchema.methods.correctPassword = async function (
  enteredPassword,
  actualPassword
) {
  return await bcrypt.compare(enteredPassword, actualPassword);
};

userSchema.methods.passwordChangedAfter = function (JwtTimeStamp) {
  if (this.passwordChangedAt) {
    const changeTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JwtTimeStamp > changeTimeStamp;
  }
  // If user never change password (not Exist in DB) return False(Not Changed)

  return false;
};

userSchema.pre("save", async function (next) {
  //Check if its already hashed
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
