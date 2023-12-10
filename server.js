const express = require("express");
const app = express();
const PORT = 3000;
const listEditRouter = require("./list-edit-router");
const middlewares = require("./middlewares");

app.use(middlewares.validateMethods);
app.use("/list-view", listEditRouter);

const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

const tareas = [];

app.get("/tareas", (req, res) => {
  res.json(tareas);
});

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en http://localhost:${PORT}`);
});
