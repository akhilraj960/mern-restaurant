const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const { register, login, adminlogin } = require("./routes/authRouter");
const { allusers, addcategory, getCategory } = require("./routes/adminRouter");
const app = express();

const port = process.env.PORT || 5000;

// DataBase Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/joyel")
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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
