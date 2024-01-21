const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");
const UserModel = require("../models/UserModel");

const allusers = async (req, res) => {
  try {
    const users = await UserModel.find().select("-password");
    res.status(200).send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ message: "Internal Server Error", success: false });
  }
};

const addcategory = async (req, res) => {
  try {
    const newCategory = new CategoryModel({
      name: req.body.category,
    });

    newCategory.save().then((data) => {
      console.log(data);
      if (data) {
        return res.json({ message: "new categroy added" });
      } else {
        return res.json({ message: "error" });
      }
    });
  } catch (error) {}
};

const getCategory = async (req, res) => {
  await CategoryModel.find().then((data) => {
    res.json(data);
  });
};

const categoryActivate = async (req, res) => {
  const id = req.body.id;
  console.log(id);
  await CategoryModel.findByIdAndUpdate(
    id,
    { $set: { status: true } },
    { new: true }
  ).then((data) => {
    console.log(data);
    return res.json({ message: "Activated" });
  });
};

const categoryInActivate = async (req, res) => {
  const id = req.body.id;
  console.log(id);
  await CategoryModel.findByIdAndUpdate(
    id,
    { $set: { status: false } },
    { new: true }
  ).then((data) => {
    console.log(data);
    return res.json({ message: "DeActivated" });
  });
};

const addproduct = (req, res) => {
  console.log(req.body);

  const newProduct = new ProductModel({
    name: req.body.name,
    category: req.body.category,
    price: req.body.cost,
    description: req.body.description,
  });

  newProduct.save().then((data) => {
    if (data) {
      return res.json({ message: "New Product Added" });
    }
  });
};

const getAllProduct = async (req, res) => {
  const product = await ProductModel.find();
  res.json({ product });
};

const getOneProduct = async (req, res) => {
  const { id } = req.params;

  const product = await ProductModel.findById(id);

  res.status(200).json(product);
};

const updateproduct = async (req, res) => {
  const { id } = req.params;


  const updatedProduct = await ProductModel.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
  );
  res
    .status(200)
    .json({ message: "Product updated successfully", updatedProduct });
};

module.exports = {
  allusers,
  addcategory,
  getCategory,
  categoryActivate,
  categoryInActivate,
  addproduct,
  getAllProduct,
  getOneProduct,
  updateproduct,
};
