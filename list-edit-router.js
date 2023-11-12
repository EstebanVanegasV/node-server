const express = require("express");
const listEditRouter = express.Router();
const middlewares = require("./middlewares");

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

module.exports = listEditRouter;
