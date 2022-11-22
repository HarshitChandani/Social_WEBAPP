const PostModel = require("../models/post");

const createNewPost = (req, res) => {
  try {
    const { creator, title, description, banner } = req.body;
    const newPost = new PostModel({
      title: title,
      creator: creator,
      description: description,
      banner: banner,
    });

    newPost.save().then((data, error) => {
      if (data) {
        return res.json({
          post: data,
          msg: "inserted",
          error: false,
        });
      } else {
        return res.json({
          post: null,
          msg: "error occured.",
          error: true,
        });
      }
    });
  } catch (error) {
    return res.json({
      post: null,
      msg: error,
      error: true,
    });
  }
};

const allPost = async (req, res) => {
  const posts = await PostModel.find();
  if (posts.length !== 0) {
    return res.json({ post: posts });
  } else {
    return res.json({ post: null });
  }
};

module.exports = {
  NewPost: createNewPost,
  AllPosts: allPost,
};
