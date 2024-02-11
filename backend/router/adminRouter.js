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

module.exports = router;