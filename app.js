const readline = require("readline-sync");

let tareas = [];

function agregarTarea() {
  const indicador = readline.question("Indicador de tarea:");
  const descripcion = readline.question("Descripcion de la tarea:");

  const tarea = {
    indicador,
    descripcion,
    completada: false,
  };
  tareas.push(tarea);
  console.log("Trea añadida:", tarea);
}

function eliminarTarea() {
  const indicadorEliminar = readline.question("Indicador de tarea a eliminar:");
  tareas = tareas.filter((tarea) => tarea.indicador !== indicadorEliminar);
  console.log("Tarea eliminada");
}

function completarTarea() {
  const indicadorCompletar = readline.question(
    "Indicador de tarea completada:"
  );
  const tarea = tareas.find((tarea) => tarea.indicator === indicadorCompletar);
  if (tarea) {
    tarea.completada = true;
    console.log("Tarea marcada como completada:", tarea);
  } else {
    console.log("No se encontro ninguna tarea con ese indicador");
  }
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

function menu() {
  while (true) {
    console.log("\n1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Completar tarea");
    console.log("4. Mostrar tareas");
    console.log("5. Salir");

    const opcion = readline.question("Selecciona una opcion:");

    switch (opcion) {
      case "1":
        agregarTarea();
        break;
      case "2":
        eliminarTarea();
        break;
      case "3":
        completarTarea();
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
menu();
