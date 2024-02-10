const AdminModel = require("../models/AdminModel");
const UserModel = require("../models/UserModel");

const register = (req, res) => {
  const { name, email, password, cPassword } = req.body;

  if (!name || !email || !password || !cPassword) {
    return res.send({ message: "Fill all the fields", success: false });
  }

  const user = new UserModel(req.body);
  user.save().then((user) => {
    res.send(user);
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send({ message: "Incorrect email or password", success: false });
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.send({ message: "Incorrect email or password", success: false });
  }

  if (user.password === password) {
    return res.send({ message: "Login Success", success: true });
  } else {
    return res.send({ message: "Incorrect email or password", success: false });
  }
};

const adminlogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send({ message: "Invalid email or password", success: false });
  }

  const admin = await AdminModel.findOne({ email });

  if (!admin) {
    return res.send({ message: "Invalid email or password", success: false });
  }

  if (admin.password === password) {
    return res.send({
      message: "Login Success",
      success: true,
      role: admin.role,
      id: admin._id,
    });
  } else {
    return res.send({ message: "Invalid email or password", success: false });
  }
};

module.exports = { register, login, adminlogin };
