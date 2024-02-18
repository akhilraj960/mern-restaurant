const express = require("express");
const path = require("path");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const fileUpload = require("express-fileupload");


const authRouter = require("./router/authRouter");
const adminRouter = require("./router/adminRouter");
const userRouter = require("./router/userRouter");

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
app.use(fileUpload());

// Routes

app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
