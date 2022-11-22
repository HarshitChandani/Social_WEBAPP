const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers;
  console.log(token);
  next();
};
