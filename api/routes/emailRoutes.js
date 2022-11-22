const express = require("express");
const EmailComponent = require("../controller/EmailComponent");
const Router = express.Router();

Router.get("/send", EmailComponent.sendEmail);

module.exports = Router;
