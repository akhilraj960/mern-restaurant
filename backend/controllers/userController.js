const OrderModel = require("../models/OrderModel");
const ProductModel = require("../models/ProductModel");

const allFoods = async (req, res) => {
  const foods = await ProductModel.find();
  res.send(foods);
};

const order = async (req, res) => {
  console.log(req.params);

  const { foodId, userId } = req.params;

  const newOrder = new OrderModel({
    user: userId,
    product: foodId,
  });

  newOrder.save().then((data) => {
    res.send({ message: "Order Successfully" });
  });
};

module.exports = { allFoods, order };
