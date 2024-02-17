const ProductModel = require("../models/ProductModel");

const allFoods = async (req, res) => {
  const foods = await ProductModel.find();
  res.send(foods);
};

module.exports = { allFoods };
