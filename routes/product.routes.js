// Imports
const router = require("express").Router();
const {
  allProducts,
  OneProduct,
  productByConsole,
} = require("../controllers/product.controller.js");

const html = `
<h1>Bienvenue sur l'API Microbamba</h1>
<p>Les routes disponible sont : </p>
<ul>
  <li>/product/all</li>
  <li>/product/:id</li>
  <li>/product/console/:console</li>
</ul>
`;

router.get("/", (res) => {
  res.send(html);
});
router.get("/product/all", allProducts);
router.get("/product/:id", OneProduct);
router.get("/product/console/:console", productByConsole);

module.exports = router;
