const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerValid = (name, email, password, cf_password) => {
  if (!name) return "Please enter your name";
  if (!email) return "Please enter your email address";
  if (!validateEmail(email)) return "Please enter valid email";
  if (!password) return "Please enter new password";
  if (password.length < 6)
    return "Password should contain atleast 6 characters";
  if (!cf_password) return "Please retype your password to confirm";
  if (password !== cf_password)
    return "Passwords does not match. Please try again";
};


const register = async (req, res) => {
  try {
    const { name, email, password, cPassword } = req.body;
    const errorMessage = registerValid(name, email, password, cPassword);
    if (errorMessage) return res.status(400).json({ message: errorMessage });
    const userExists = await Users.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "This email is already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await new Users({
      name,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).json({
      message: "You have successfully registered. Please login now",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { register };
