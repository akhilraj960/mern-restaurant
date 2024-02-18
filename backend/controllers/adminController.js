const CategoryModel = require("../models/CategoryModel");
const OrderModel = require("../models/OrderModel");
const ProductModel = require("../models/ProductModel");
const UserModel = require("../models/UserModel");

// USER SECTION STARTS

const allusers = async (req, res) => {
  const users = await UserModel.find().select("-password");

  return res.send({ users });
};

// USER SECTION ENDS

// -------------------------------- //

// CATEGORY SECTION STARTS

const addcategory = async (req, res) => {
  const newCategory = new CategoryModel({ name: req.body.category });

  newCategory.save().then((data) => {
    if (data) {
      return res.send({ message: "New Category Added", success: true });
    } else {
      return res.send({ message: "Error" });
    }
  });
};

const allcategory = async (req, res) => {
  const categories = await CategoryModel.find();

  if (categories) {
    return res.send({ message: "Categories found", success: true, categories });
  }
};

const activeCategory = async (req, res) => {
  const id = req.body.id;

  await CategoryModel.findByIdAndUpdate(
    id,
    { $set: { status: true } },
    { new: true }
  ).then((data) => {
    if (data) {
      return res.send({ message: "Category Activated", success: true });
    } else {
      return res.send({ message: "Error", success: false });
    }
  });
};

const inactiveCategory = async (req, res) => {
  const id = req.body.id;

  await CategoryModel.findByIdAndUpdate(
    id,
    { $set: { status: false } },
    { new: true }
  ).then((data) => {
    if (data) {
      return res.send({ message: "Category DeActivated", success: true });
    } else {
      return res.send({ message: "Error", success: false });
    }
  });
};

// CATEGORY SECTION ENDS

// -------------------------------- //

// PRODUCT SECTION STARTS

const newProduct = (req, res) => {
  const newProduct = new ProductModel({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description,
    qty: req.body.qty,
  });

  newProduct.save().then((data) => {
    if (data) {
      const imagePath = `./uploads/${data._id}.jpg`;

      if (req.files.image) {
        req.files.image.mv(imagePath, (err) => {
          return res.send({
            message: "New Product Added Successfully",
            success: true,
          });
        });
      } else {
        return res.send({ message: "Image Upload failed" });
      }
    } else {
      return res.send({ message: "Product Added failed", success: false });
    }
  });
};

const allProducts = async (req, res) => {
  const products = await ProductModel.find();

  if (products) {
    return res.send({
      message: "Product Fetched Successfully",
      success: true,
      products,
    });
  } else {
    return res.send({ message: "Product Fetched Failed", success: false });
  }
};

const getOneProduct = async (req, res) => {
  const { id } = req.params;

  const product = await ProductModel.findById(id);

  if (product) {
    return res.send({
      message: "Product Fetched Successfully",
      success: true,
      product,
    });
  } else {
    return res.send({ message: "Product Fetched Failed", success: false });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const updatedProduct = await ProductModel.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
  ).then((data) => {
    if (data) {
      return res.send({ message: "Product Updated", success: true });
    } else {
      return res.send({ message: "Product Updation Failed", success: false });
    }
  });
};

// PRODUCT SECTION ENDS

// -------------------------------- //

// ORDER SECTION STARTS

// const allOrders = (req, res) => {
//   ProductModel.aggregate([
//     {
//       $match: {
//         $ne: ["delivered"],
//       },
//     },
//   ]).then((response) => {
//     console.log(response);
//   });
// };

const allOrders = (req, res) => {
  OrderModel.aggregate([
    {
      $match: {
        status: { $ne: "delivered" }, // Match orders where status is not "delivered"
      },
    },
    {
      $lookup: {
        from: "users", // Assuming your User collection is named "users"
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $lookup: {
        from: "products", // Assuming your User collection is named "users"
        localField: "product",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: "$user", // Unwind the user array
    },
    {
      $unwind: "$product", // Unwind the user array
    },
    {
      $project: {
        _id: 1,
        "user.name": 1,
        "user.address": 1,
        "user.phone": 1,
        "product._id": 1,
        "product.name": 1,
      },
    },
  ])
    .then((response) => {
      console.log(response);
      res.json(response); // Send the response back to the client
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
};

// ORDER SECTION ENDS

// -------------------------------- //

module.exports = {
  allusers,
  addcategory,
  allcategory,
  activeCategory,
  inactiveCategory,
  newProduct,
  allProducts,
  getOneProduct,
  updateProduct,
  allOrders,
};
