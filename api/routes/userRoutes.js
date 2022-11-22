const express = require("express");
const { handleLogin, handleRegister } = require("../controller/UserController");
const Router = express.Router();

Router.post("/login", handleLogin);
Router.post("/register", handleRegister);

module.exports = Router;
