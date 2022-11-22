const bcrypt = require("bcryptjs");

exports.utils = {
  hashPassword: async (stringPwd) => {
    let PWDsalt = "",
      hashedPwd = "";
    await bcrypt
      .genSalt()
      .then((result) => (PWDsalt = result))
      .catch((error) => (PWDsalt = ""));
    if (PWDsalt !== "") {
      await bcrypt
        .hash(stringPwd, PWDsalt)
        .then((data) => {
          hashedPwd = data;
        })
        .catch((error) => {
          hashedPwd = "";
        });
    }
    return hashedPwd;
  },
  checkPwd: async (stringPwd, hashPwd) => {
    let isPwdCorrect = false;
    await bcrypt.compare(stringPwd, hashPwd).then((isCorrect) => {
      isPwdCorrect = isCorrect;
    });
    return isPwdCorrect;
  },
};
