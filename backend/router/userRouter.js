const router = require("express").Router();

const { allFoods, order } = require("../controllers/userController");

router.get("/foods", allFoods);
router.post("/order/:foodId/:userId", order);

module.exports = router;
