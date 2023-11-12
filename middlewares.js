const express = require("express");
const middlewares = express.Router();

middlewares.validateEditRequest = (req, res, next) => {
  if ((req.method === "POST" || req.method === "PUT") && !req.body) {
    return res.status(400).json({ error: "Cuerpo de solicitud vacio" });
  }

  if (
    req.method === "POST" &&
    (!req.body.descripcion || typeof req.body.isCompleted !== "boolean")
  ) {
    return res.status(400).json({ error: "Informacion no valida o faltante " });
  }

  if (
    req.method === "PUT" &&
    (!req.body.descripcion || typeof req.body.isCompleted !== "boolean")
  ) {
    return res.status(400).json({ error: "Informacion no valida o faltante" });
  }
  next();
};

middlewares.validateMethods = (req, res, next) => {
  const validMethods = ["GET", "POST", "PUT", "DELETE"];

  if (!validMethods.includes(req.method)) {
    return res.status(400).json({ error: "Metodo HTTP no valido" });
  }
  next();
};

middlewares.validateViewParams = (req, res, next) => {
  const { completas, incompletas } = req.params;
  if (
    !completas ||
    !incompletas ||
    isNaN(Number(completas)) ||
    isNaN(Number(incompletas))
  ) {
    return res.satus(400).json({ error: "Parametros no validos" });
  }
  next();
};

module.exports = middlewares;
