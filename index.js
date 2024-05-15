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
<h1>Bienvenue sur l'API Microbamba</h1>
<p>Les routes disponible sont : </p>
<ul>
  <li>/product/all</li>
  <li>/product/:id</li>
  <li>/product/console/:console</li>
</ul>
`;

app.get("/", (res) => {
  res.send(html);
});

module.exports = app;
