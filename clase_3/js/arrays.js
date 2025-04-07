// Arrays
const alumnos = ["Romina", "Josefina", "Sofia", "Joaquin", "Sofia"];

// const array = [1, 2, true, false, "string", ["nombre", 2], () => {}];

// Mostrar alumnos
console.log(alumnos);
// Acceder a un elemento con el índice
console.log(alumnos[0]);
console.log(alumnos[1]);
console.log(alumnos[2]);

// Modificar un elemento con el indice
// alumnos[0] = "Mariana";
// console.log(alumnos);

// Mostrar cuantos elementos tiene el array
console.log(alumnos.length);

// Métodos de array
alumnos.push("Carolina"); // Agregar al final
console.log(alumnos);

alumnos.pop(); // Eliminar el último elemento
console.log(alumnos);

alumnos.forEach((alumno) => {
  console.log(alumno);
}); // Recorre el array y ejecuta una función por cada elemento

const sinSofia = alumnos.filter((alumno) => {
  return alumno !== "Sofia";
}); // Filtra el array segun un criterio
console.log(sinSofia);

const mensajes = alumnos.map((alumno) => {
  return "Bienvenido " + alumno;
});
console.log(mensajes);

const sofia = alumnos.find((alumno) => {
  return alumno === "Sofia";
});
console.log(sofia);
