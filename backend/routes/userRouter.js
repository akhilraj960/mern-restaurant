const OrderModel = require("../models/OrderModel");

const order = (req, res) => {
  const { id, pid } = req.params;

  const newOrder = new OrderModel({
    user: id,
    product: pid,
  });

  newOrder.save().then((data) => {
    res.status(200).json({ message: "Order Successful", success: true });
  });
};

module.exports = { order };
