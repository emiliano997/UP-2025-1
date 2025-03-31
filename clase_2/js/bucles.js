// Bucles
// while
// Utiliza una variable bandera
let i = 0;
// Mientras la condicion sea true, se ejecuta el bloque
console.log("While");
while (i < 5) {
  console.log(i);
  // i = i + 1;
  // i += 1;
  i++;
}

// do - while
let nombre;

// do {
//   nombre = prompt("Introduce tu nombre");
//   console.log(nombre);

//   // .length -> Longitud de un string (texto)
//   if (nombre.length === 3) {
//     break; // Detiene el bucle
//   }
// } while (nombre !== "Emiliano");

// for
// Se utiliza cuando se conoce la cantidad de repeticiones
let cantidadVeces = Number(prompt("Ingrese la cantidad de veces: "));

for (let i = 0; i < cantidadVeces; i++) {
  console.log("Mensaje repetido " + i);
}
