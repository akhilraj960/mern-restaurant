const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  qty: String,
});

module.exports = mongoose.model("Product", productSchema);
