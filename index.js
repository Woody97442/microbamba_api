// Express js
const express = require("express");
const app = express();

// dotenv
require("dotenv").config({ path: "./.env" });

// db connect
require("./config/db");

// Routes
const productRoutes = require("./routes/product.routes");
app.use("/", productRoutes);

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
