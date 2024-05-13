const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 200,
  },
  imageUrl: { type: String, required: true },
  imageAlt: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String },
  console: { type: String, required: true, maxlength: 100 },
});

module.exports = mongoose.model("product", ProductSchema);
