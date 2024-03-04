const { default: mongoose } = require("mongoose");
const CartModel = require("../models/CartModel");
const OrderModel = require("../models/OrderModel");
const ProductModel = require("../models/ProductModel");

const allFoods = async (req, res) => {
  const foods = await ProductModel.find();
  res.send(foods);
};

const order = async (req, res) => {
  const { address, landmark, phone } = req.body;

  const { foodId, userId } = req.params;

  console.log(req.params);

  const newOrder = new OrderModel({
    user: userId,
    product: foodId,
    address: address,
    landmark: landmark,
    phone: phone,
  });

  newOrder.save().then((data) => {
    console.log(data)
    res.send({ message: "Order Successfully" });
  });
};

const addCart = (req, res) => {
  const { productid, userid } = req.params;

  const newCart = new CartModel({
    user: userid,
    product: productid,
  });

  newCart.save().then((data) => {
    res.send({ message: "Add to cart" });
  });
};

const CartItems = async (req, res) => {
  const { userid } = req.params;

  await CartModel.aggregate([
    {
      $match: {
        user: {
          $eq: new mongoose.Types.ObjectId(userid),
        },
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "product",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: "$product",
    },
    {
      $project: {
        product: 1,
      },
    },
  ]).then((response) => {
    res.status(200).json({ response, success: true });
  });
};

const deleteOneItem = (req, res) => {
  const { id } = req.params;

  console.log(id);

  CartModel.findByIdAndDelete(id)
    .then((response) => {
      if (!response) {
        return res
          .status(200)
          .json({ success: false, message: "Item not found" });
      }
      console.log("Item deleted:", response);
      res.status(200).json({
        success: true,
        message: "Item deleted successfully",
        deletedItem: response,
      });
    })
    .catch((error) => {
      console.error("Error deleting item:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while deleting item",
        error,
      });
    });
};

module.exports = { allFoods, order, addCart, CartItems, deleteOneItem };
