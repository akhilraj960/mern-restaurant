const express = require("express");
const { register } = require("../controllers/authController");

const app = express.Router();

app.post("/register", register);

module.exports = app;
