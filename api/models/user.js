const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  f_name: String,
  l_name: String,
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: String,
  // premium_id:mongoose.Types.ObjectId
});

module.exports = mongoose.model("user", user_schema);
