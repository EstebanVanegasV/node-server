const readline = require("readline-sync");

let tareas = [];

function agregarTarea() {
  return new Promise((resolve, reject) => {
    try {
      constindicador = readline.question("Indicador de tarea:");
      const descripcion = readline.question("Descripcion de la trarea:");

      const tarea = {
        indicador,
        descripcion,
        completada: false,
      };
      tareas.push(tarea);
      console.log("Tarea añadida:", tarea);
      resolve(tarea);
    } catch (error) {
      reject(error);
    }
  });
}

function eliminarTarea() {
  return new Promise((resolve, rejext) => {
    try {
      const indicadorEliminar = redline.question(
        "Indicador de tarea a eliminar"
      );
      tareas = tareas.filter((tarea) => tarea.indicador !== indicadorEliminar);
      console.log("Tarea eliminada");
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

function completarTarea() {
  return new Promise((resolve, reject) => {
    try {
      const indicadorCompletar = readline.question(
        "Indicador de tarea completada:"
      );
      const tarea = tareas.find(
        (tarea) => tarea.indicator === indicadorCompletar
      );

      if (tarea) {
        tarea.completada = true;
        console.log("Tarea marcada como completada:", tarea);
        resolve(tarea);
      } else {
        console.log("No se encontro ninguna tarea con ese indicador");
        resolve(null);
      }
    } catch (error) {
      reject(error);
    }
  });
}

function mostrarTareas() {
  console.log("\nLista de tareas:");
  tareas.forEach((tarea) => {
    console.log(
      `- ${tarea.indicador} | Descripcion: ${tarea.descripcion} | Completada: ${tarea.completada}`
    );
  });
  console.log(`\n`);
}

async function menu() {
  while (true) {
    console.log("\n1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Completar tarea");
    console.log("4. Mostrar tareas");
    console.log("5. Salir");

    const opcion = readline.question("Selecciona una opcion:");

    switch (opcion) {
      case "1":
        try {
          await agregarTarea();
        } catch (error) {
          console.error("Error al agregar tarea:", error);
        }
        break;
      case "2":
        try {
          await eliminarTarea();
        } catch (error) {
          console.log("Error al eliminar tarea", error);
        }
        break;
      case "3":
        try {
          await completarTarea();
        } catch (error) {
          console.log("Error al completar tarea", error);
        }
        break;
      case "4":
        mostrarTareas();
        break;
      case "5":
        console.log("Saliendo del programa.");
        process.exit(0);
      default:
        console.log("Opcion no ValidityState. Intentalo de nuevo. ");
    }
  }
}
async function iniciarPrograma() {
  try {
    await menu();
  } catch (error) {
    console.error("Error en el programa:", error);
  }
}

iniciarPrograma();
