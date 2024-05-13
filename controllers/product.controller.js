const productModel = require("../models/product.model");

// fetch all products
module.exports.allProducts = (req, res) => {
  productModel
    .find()
    .sort({ title: 1 })
    .exec()
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(400).send("Error retrieving data");
    });
};

// fetch product by id
module.exports.OneProduct = (req, res) => {
  const { id } = req.params;

  productModel
    .findById({ _id: id })
    .exec()
    .then((doc) => {
      if (!doc) {
        return res.status(404).send("Product not found");
      }
      res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(400).send("Error retrieving data : " + err);
    });
};

// fetch allproduct by console
module.exports.productByConsole = (req, res) => {
  const { console } = req.params;

  productModel
    .find({ console })
    .sort({ title: 1 })
    .exec()
    .then((docs) => {
      res.status(200).send(docs);
    })
    .catch((err) => {
      res.status(400).send("Error retrieving data : " + err);
    });
};
