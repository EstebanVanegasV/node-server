const jwt = require("jsonwebtoken");
require("dotenv").config();

function validateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token invalido" });
    }
    req.user = decoded;
    next();
  });
}

module.exports = { validateToken };
