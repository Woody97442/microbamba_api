// Express js
const express = require("express");
const app = express();
const cors = require("cors");

// dotenv
require("dotenv").config({ path: "./.env" });

// db connect
require("./config/db");

// Middlewares
app.use(cors());
app.use("/image", express.static("public/image"));

// Routes
const productRoutes = require("./routes/product.routes");
app.use("/", productRoutes);

app.get("/", (req, res) => {
  res.send(
    "Bienvenue sur l'API Microbamba</br>Les routes disponible sont :\n/product/all\n/product/:id\n/product/console/:console\n"
  );
});

module.exports = app;
