const express = require("express");
const jwt = require("jsonwebtoken");
const listEditRouter = express.Router();
const middlewares = require("./middlewares");
require("dotenv").config();
const authMiddlewares = require("./auth-middlewares");

const users = [
  { username: "clientes-premium", password: "password1" },
  { username: "clientes-medium", password: "password2" },
];

listEditRouter.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Credenciales invalidas" });
  }
  const token = jwt.sing({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

listEditRouter.use(middlewares.validateEditRequest);

listEditRouter.post("/crear", (req, res) => {
  res.json({ mensaje: "Tarea creada exitosamente" });
});

listEditRouter.delete("/eliminar/:id", (req, res) => {
  const taskId = req.params.id;
  res.json({ mensaje: `Tarea con ID ${taskId} eliminada` });
});

listEditRouter.put("/actualizar/:id", (req, res) => {
  const taskId = req.params.id;
  res.json({ mensaje: `Tarea con ID ${taskId} actualizada` });
});

listEditRouter.get(
  "/ruta-protegida",
  authMiddlewares.validateToken,
  (req, res) => {
    res.json({ mensaje: "Ruta protegida alcanzada con exito" });
  }
);

module.exports = listEditRouter;
