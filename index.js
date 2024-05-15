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

const html = `
Bienvenue sur l'API Microbamba
Les routes disponible sont :
  /product/all
  /product/:id
  /product/console/:console
`;

app.get("/", (res, req) => {
  res.send(html);
});

module.exports = app;
