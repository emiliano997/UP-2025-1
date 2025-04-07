// Ejemplo 1
// const alumnos = ["Romina", "Josefina", "Sofia", "Joaquin", "Lucas"];

// const buscarAlumno = prompt("Ingrese el nombre del alumno a buscar: ");

// const alumnoEncontrado = alumnos.find((alumno) => {
//   return alumno === buscarAlumno;
// });

// if (alumnoEncontrado) {
//   alert("El alumno " + buscarAlumno + " fue encontrado en la lista.");
// } else {
//   alert("El alumno " + buscarAlumno + " no está en la lista");
// }

// Ejemplo 2
const alumnos = [];

for (let i = 0; i < 5; i++) {
  const nombre = prompt("Ingrese el nombre del alumno:");
  alumnos.push(nombre);
}

alumnos.forEach((alumno) => {
  console.log("Bienvenido " + alumno);
});
