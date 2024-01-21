const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const { register, login, adminlogin } = require("./routes/authRouter");
const {
  allusers,
  addcategory,
  getCategory,
  categoryActivate,
  categoryInActivate,
  addproduct,
  getAllProduct,
  getOneProduct,
  updateproduct,
} = require("./routes/adminRouter");
const app = express();

const port = process.env.PORT || 5000;

// DataBase Connection
mongoose
  .connect(
    "mongodb+srv://muhammedmoosa369:1234567890@cluster0.pp6frpz.mongodb.net/resturant?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.post("/register", register);
app.post("/login", login);
app.post("/admin/login", adminlogin);
app.get("/admin/allusers", allusers);
app.post("/admin/addcategory", addcategory);
app.get("/admin/getcategory", getCategory);
app.put("/admin/activatecategory", categoryActivate);
app.put("/admin/deactiavtecategory", categoryInActivate);
app.post("/admin/addproduct", addproduct);
app.get("/admin/getallproducts", getAllProduct);
app.put("/admin/updateproduct/:id", updateproduct);
app.get("/getoneproduct/:id", getOneProduct);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// q27rHCaWt6UKJwdo
