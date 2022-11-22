const { utils } = require("../service/utils");
const User = require("../models/user");
const JWT = require("jsonwebtoken");

const isUserAlreadyExist = async (username) => {
  if (username !== "") {
    const isExist = await User.find({
      email: { $eq: username },
    });
    return isExist;
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user_existence = await isUserAlreadyExist(username);
  if (user_existence.length !== 0) {
    // User is registered.
    const isPwdCorrect = await utils.checkPwd(
      password,
      user_existence[0].password
    );
    if (isPwdCorrect) {
      // AUthorized User.
      const token = JWT.sign(
        { id: user_existence[0]._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
          algorithm: "HS256",
        }
      );
      res.cookie("token", token);
      return res.status(200).json({
        isLoggedIn: true,
        msg: "Authenticated",
        token: token,
      });
    } else {
      return res.status(200).json({
        isLoggedIn: false,
        msg: "InCorrect Password",
        token: null,
      });
    }
  } else {
    return res.status(200).json({
      msg: "Invalid User",
      isLoggedIn: false,
      token: null,
    });
  }
};

const register = async (req, res) => {
  const { f_name, l_name, username, pwd } = req.body;
  const isUserExisted = await isUserAlreadyExist(username);
  const hashedPwd = await utils.hashPassword(pwd);
  console.log(hashedPwd);
  if (isUserExisted.length) {
    return res.json({
      msg: "User Already exist",
      created: false,
    });
  } else {
    createUser();
  }

  function createUser() {
    const newUser = new User({
      f_name: f_name,
      l_name: l_name,
      email: username,
      password: hashedPwd,
    });
    newUser.save((error, data) => {
      if (data) {
        return res.json({
          msg: "User Created",
          created: true,
        });
      } else {
        return res.json({
          msg: "Internal Error",
          created: false,
        });
      }
    });
  }
};

module.exports = {
  handleLogin: login,
  handleRegister: register,
};
