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
  console.log(req.body);
  try {
  } catch (error) {}
};

module.exports = { allusers, addcategory };
