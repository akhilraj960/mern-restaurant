const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const authRouter = require("./routes/authRouter");

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

// Routes
app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
