const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    banner: String,
    creator: String,
  },
  {
    collection: "posts",
  }
);

module.exports = mongoose.model("posts", postSchema);
