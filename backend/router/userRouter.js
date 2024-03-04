const router = require("express").Router();

const {
  allFoods,
  order,
  addCart,
  CartItems,
  deleteOneItem,
} = require("../controllers/userController");

router.get("/foods", allFoods);
router.post("/order/:foodId/:userId", order);
router.post("/addcart/:productid/:userid", addCart);
router.get("/cart/:userid", CartItems);
router.delete("/removecart/:id", deleteOneItem);

module.exports = router;
