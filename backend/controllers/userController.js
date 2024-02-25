const OrderModel = require("../models/OrderModel");
const ProductModel = require("../models/ProductModel");

const allFoods = async (req, res) => {
  const foods = await ProductModel.find();
  res.send(foods);
};

const order = async (req, res) => {
  const { address, landmark, phone } = req.body;

  const { foodId, userId } = req.params;

  const newOrder = new OrderModel({
    user: userId,
    product: foodId,
    address: address,
    landmark: landmark,
    phone: phone,
  });

  newOrder.save().then((data) => {
    res.send({ message: "Order Successfully" });
  });
};

module.exports = { allFoods, order };
