const http = require("http");
const url = require("url");
const { parse } = require("querystring");

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (req.method === "GET" && pathname === "/tareas") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tareas));
  } else if (req.method === "POST" && pathname === "/tareas") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { descripcion, completada } = parse(data);

      if (!descripcion) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ mensaje: "La descripción es obligatoria." }));
      } else {
        const nuevaTarea = {
          id: idTarea++,
          descripcion,
          completada: completada || false,
        };

        tareas.push(nuevaTarea);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            mensaje: "Tarea añadida correctamente",
            tarea: nuevaTarea,
          })
        );
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ mensaje: "Ruta no encontrada" }));
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

let tareas = [];
let idTarea = 1;
