const router = require("express").Router();

const {
  addcategory,
  allcategory,
  activeCategory,
  inactiveCategory,
  newProduct,
  allProducts,
  getOneProduct,
  updateProduct,
  allusers,
  allOrders,
  statusDelivered,
} = require("../controllers/adminController");

// CATEGORY ROUTES

router.post("/newcategory", addcategory);
router.get("/categories", allcategory);
router.put("/status/activate", activeCategory);
router.put("/status/inactivate", inactiveCategory);

// PRODUCT ROUTES

router.post("/newproduct", newProduct);
router.get("/products", allProducts);
router.get("/oneproduct/:id", getOneProduct);
router.put("/updateproduct/:id", updateProduct);

// USER ROUTES

router.get("/users", allusers);

// ORDER ROUTES

router.get("/orders", allOrders);
router.put("/order/status/:id", statusDelivered);

module.exports = router;
