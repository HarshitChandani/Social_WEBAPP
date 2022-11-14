const express = require("express");
const PostController = require("../controller/PostController");
const Router = express.Router();

Router.post("/new", PostController.NewPost);

module.exports = Router;
