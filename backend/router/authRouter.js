const router = require("express").Router();
const {
  login,
  register,
  adminlogin,
} = require("../controllers/authController");

router.post("/login", login);
router.post("/register", register);
router.post("/adminlogin", adminlogin);

module.exports = router;
