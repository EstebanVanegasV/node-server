const express = require("express");
const listViewRouter = express.Router();

listViewRouter.get("/completas", (req, res) => {
  res.json({ mensaje: "Lista de tareas completas" });
});

listViewRouter.get("/incompletas", (req, res) => {
  res.json({ mensaje: "Lista de tareas incompleta" });
});

module.exports = listViewRouter;
