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

module.exports = {
  NewPost: createNewPost,
};
