const express = require("express");
const path = require("path");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// TO GEt JSON BOdy Data as req.body
app.use(express.json({ limit: "10kb" }));
//To connect public Folder with Project
app.use(express.static(path.join(__dirname, "public")));

// Routes Handler
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);

// app.use("/api/v1/products", productRoutes);
module.exports = app;
