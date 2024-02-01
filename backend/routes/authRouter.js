const AdminModel = require("../models/AdminModel");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

const register = (req, res) => {
  const { name, email, password, cPassword } = req.body;

  if (!name || !email || !password || !cPassword) {
    return res.send("Fill all the fields");
  }

  const user = new UserModel(req.body);
  user.save().then((user) => {
    res.send("user");
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Incorrect email or password", success: false });
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
 
      if (passwordMatch) {
        return res
          .status(200)
          .send({ user, message: "Login success", success: true });
      } else {
        return res
          .status(401)
          .send({ message: "Incorrect email or password", success: false });
      }
    } else {
      return res
        .status(401)
        .send({ message: "Incorrect email or password", success: false });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Internal Server Error", success: false });
  }
};

const adminlogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Invalid email or password", success: false });
  }

  try {
    const admin = await AdminModel.findOne({ email });

    if (!admin) {
      return res
        .status(401)
        .json({ message: "Admin not found", success: false });
    }

    if (!password === admin.password) {
      return res.status(401).json({
        message: "Invalid password",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Login successful",
      success: true,
      role: admin.role,
      id: admin._id,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

module.exports = { register, adminlogin, login };
