const app = require("./app");
const Product = require("./models/productModel");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/userModel");

dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception:", err);
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  console.log("unhandle Rejection", (err) => {
    process.exit(1);
  });
});
//Local_Env
const Local_DB_String = process.env.LOCAL_DATABASE_STRING;
const Local_DB_Name = process.env.LOCAL_DB_NAME;

//ENV Variables
const DB_String = process.env.DATABASE_STRING;
const DB_NAME = process.env.DATABASE_NAME;
const port = process.env.PORT;

//Mongoose Database Connect
const connectDB = async () => {
  try {
    //To Connect
    // await mongoose.connect(`${DB_String}${DB_NAME}`);

    //To Connect Local DataBase
    // await mongoose.connect("mongodb://localhost:27017/shop", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   // useCreateIndex: true,
    // });
    await mongoose.connect("mongodb://127.0.0.1:27017/shop", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Datbase Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
//Wait For connect Db then start server
const server = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`App is Runing on Port: ${port}`);
  });
};

// app.get("/", (req, res) => {});

server();
