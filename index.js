// Express js
const express = require("express");
const app = express();
const cors = require("cors");

// dotenv
require("dotenv").config({ path: "./.env.local" });

// db connect
require("./config/db");

// Middlewares
app.use(cors());
app.use("/image", express.static("public/image"));

// Routes
const productRoutes = require("./routes/product.routes");
app.use("/", productRoutes);

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
