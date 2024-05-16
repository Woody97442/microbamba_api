// Express js
const express = require("express");
const app = express();
const cors = require("cors");

// dotenv
require("dotenv").config({ path: "./.env" });

// db connect
require("./config/db");

// Middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use("/image", express.static(__dirname + "/public/image"));

// Routes
const productRoutes = require("./routes/product.routes");
app.use("/", productRoutes);

app.get("/", (req, res) => {
  res.send(
    "Bienvenue sur l'API Microbamba</br>Les routes disponible sont :</br>/product/all</br>/product/:id</br>/product/console/:console</br>"
  );
});

module.exports = app;
