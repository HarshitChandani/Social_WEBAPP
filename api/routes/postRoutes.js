const express = require("express");
const PostController = require("../controller/PostController");
const { verifyToken } = require("../middleware/jwt");
const Router = express.Router();

Router.post("/new", verifyToken, PostController.NewPost);
Router.get("/all", PostController.AllPosts);

module.exports = Router;
