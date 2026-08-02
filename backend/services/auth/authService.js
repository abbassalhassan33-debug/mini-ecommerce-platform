const jwt = require("jsonwebtoken");

const login = (username, password) => {
  //Demo
  if (username !== "admin" || password !== "123456") {
    return null;
  }

  const token = jwt.sign(
    {
      username: username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );
  return token;
};

module.exports = {
  login,
};
