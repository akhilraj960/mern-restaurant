const router = require("express").Router();

const { allFoods } = require("../controllers/userController");

router.get("/foods", allFoods);

module.exports = router;
