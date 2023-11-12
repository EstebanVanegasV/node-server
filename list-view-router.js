const express = require("express");
const listViewRouter = express.Router();
const middlewares = require("./middlewares");

listViewRouter.use(middlewares.validateViewParams);

listViewRouter.get("/completas", (req, res) => {
  res.json({ mensaje: "Lista de tareas completas" });
});

listViewRouter.get("/incompletas", (req, res) => {
  res.json({ mensaje: "Lista de tareas incompleta" });
});

module.exports = listViewRouter;
