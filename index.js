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

// Export de la fonction startServer
module.exports = {
  startServer: () => {
    app.use("/", productRoutes);
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  },
};
