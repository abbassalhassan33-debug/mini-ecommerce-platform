const authService = require("../../services/auth/authService");

const login = (req, res) => {
  const { username, password } = req.body;

  const token = authService.login(username, password);

  if (!token) {
    return res.status(401).json({
      message: "Invalid username or  password",
    });
  }

  res.status(200).json({
    message: "Login successful",
    token: token,
  });
};

module.exports = {
  login,
};
