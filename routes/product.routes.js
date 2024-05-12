// Imports
const router = require("express").Router();
const {
  allProducts,
  OneProduct,
  productByConsole,
} = require("../controllers/product.controller.js");

router.get("/product/all", allProducts);
router.get("/product/:id", OneProduct);
router.get("/product/console/:console", productByConsole);

module.exports = router;

// route api
// http://localhost:5000/product/all
// http://localhost:5000/product/:id
// http://localhost:5000/product/console/:console
