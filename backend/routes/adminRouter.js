const CategoryModel = require("../models/CategoryModel");
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

module.exports = { allusers, addcategory, getCategory };
